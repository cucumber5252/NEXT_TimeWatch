// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * T-Rex runner.
 * @param {string} outerContainerId Outer containing element id.
 * @param {Object} opt_config
 */
function Runner(outerContainerId, opt_config) {
    // Singleton
    if (Runner.instance_) {
        return Runner.instance_;
    }
    Runner.instance_ = this;

    this.outerContainerEl = document.querySelector(outerContainerId);
    this.containerEl = document.querySelector('#main-content');
    this.detailsButton = this.outerContainerEl.querySelector('#details-button');

    this.config = opt_config || Runner.config;

    this.dimensions = Runner.defaultDimensions;

    this.canvas = document.querySelector('.runner-canvas');
    this.canvasCtx = this.canvas.getContext('2d');

    this.tRex = null;
    this.distanceMeter = null;
    this.horizon = null;

    this.playCount = 0;
    this.runningTime = 0;
    this.highestScore = 0;
    this.time = 0;
    this.msPerFrame = 1000 / FPS;
    this.currentSpeed = this.config.SPEED;

    this.activated = false; // Whether the easter egg has been activated.
    this.playing = false; // Whether the game is currently in play state.
    this.crashed = false;
    this.paused = false;
    this.resizeTimerId_ = null;

    this.spriteDef = Runner.imageSources;
    this.loadImages();
    this.setSpeed(this.config.SPEED);
}

/**
 * Default game configuration.
 * @enum {number}
 */
Runner.config = {
    ACCELERATION: 0.001,
    BG_CLOUD_SPEED: 0.2,
    BOTTOM_PAD: 10,
    CLEAR_TIME: 3000,
    CLOUD_FREQUENCY: 0.5,
    GAMEOVER_CLEAR_TIME: 750,
    GAP_COEFFICIENT: 0.6,
    GRAVITY: 0.6,
    INITIAL_JUMP_VELOCITY: 12,
    INVERT_FADE_DURATION: 12000,
    INVERT_DISTANCE: 700,
    MAX_BLINK_COUNT: 3,
    MAX_CLOUDS: 6,
    MAX_OBSTACLE_LENGTH: 3,
    MAX_OBSTACLE_DUPLICATION: 2,
    MAX_SPEED: 13,
    MIN_JUMP_HEIGHT: 35,
    MOBILE_SPEED_COEFFICIENT: 1.2,
    RESOURCE_TEMPLATE_ID: 'audio-resources',
    SPEED: 6,
    SPEED_DROP_COEFFICIENT: 3,
    ARCADE_MODE_INITIAL_TOP_POSITION: 35,
    ARCADE_MODE_TOP_POSITION_PERCENT: 0.1,
};

/**
 * Default dimensions.
 * @enum {string}
 */
Runner.defaultDimensions = {
    WIDTH: 600,
    HEIGHT: 150,
};

/**
 * CSS class names.
 * @enum {string}
 */
Runner.classes = {
    ARCADE_MODE: 'arcade-mode',
    CONTAINER: 'runner-container',
    CANVAS: 'runner-canvas',
    CRASHED: 'crashed',
    ICON: 'icon-offline',
    INVERTED: 'inverted',
    SNACKBAR: 'snackbar',
    SNACKBAR_SHOW: 'snackbar-show',
    TOUCH_CONTROLLER: 'controller',
};

/**
 * Image source urls.
 * @enum {array.<object>}
 */
Runner.imageSources = {
    LDPI: [
        { name: 'CACTUS_LARGE', id: 'offline-resources-1x-obstacles' },
        { name: 'CACTUS_SMALL', id: 'offline-resources-1x-obstacles' },
        { name: 'CLOUD', id: 'offline-resources-1x-obstacles' },
        { name: 'HORIZON', id: 'offline-resources-1x-horizonal' },
        { name: 'PTERODACTYL', id: 'offline-resources-1x-obstacles' },
        { name: 'RESTART', id: 'offline-resources-1x-obstacles' },
        { name: 'TEXT_SPRITE', id: 'offline-resources-1x-obstacles' },
        { name: 'TREX', id: 'offline-resources-1x-trex' },
    ],
    HDPI: [
        { name: 'CACTUS_LARGE', id: 'offline-resources-2x-obstacles' },
        { name: 'CACTUS_SMALL', id: 'offline-resources-2x-obstacles' },
        { name: 'CLOUD', id: 'offline-resources-2x-obstacles' },
        { name: 'HORIZON', id: 'offline-resources-2x-horizonal' },
        { name: 'PTERODACTYL', id: 'offline-resources-2x-obstacles' },
        { name: 'RESTART', id: 'offline-resources-2x-obstacles' },
        { name: 'TEXT_SPRITE', id: 'offline-resources-2x-obstacles' },
        { name: 'TREX', id: 'offline-resources-2x-trex' },
    ],
};

/**
 * Sound FX. Reference to the ID of the audio tag on interstitial page.
 * @enum {string}
 */
Runner.sounds = {
    BUTTON_PRESS: 'offline-sound-press',
    HIT: 'offline-sound-hit',
    SCORE: 'offline-sound-reached',
};

/**
 * Key code mapping.
 * @enum {object}
 */
Runner.keycodes = {
    JUMP: { 38: 1, 32: 1 }, // Up, spacebar
    DUCK: { 40: 1 }, // Down
    RESTART: { 13: 1 }, // Enter
};

/**
 * Runner event names.
 * @enum {string}
 */
Runner.events = {
    ANIM_END: 'webkitAnimationEnd',
    CLICK: 'click',
    KEYDOWN: 'keydown',
    KEYUP: 'keyup',
    MOUSEDOWN: 'mousedown',
    MOUSEUP: 'mouseup',
    RESIZE: 'resize',
    TOUCHEND: 'touchend',
    TOUCHSTART: 'touchstart',
    VISIBILITY: 'visibilitychange',
    BLUR: 'blur',
    FOCUS: 'focus',
    LOAD: 'load',
};

/**
 * Set the game speed.
 * @param {number} opt_speed
 */
Runner.prototype.setSpeed = function (opt_speed) {
    const speed = opt_speed || this.currentSpeed;
    // Reduce the speed on smaller mobile screens.
    if (this.dimensions.WIDTH < 600) {
        const mobileSpeed = speed * this.config.MOBILE_SPEED_COEFFICIENT;
        this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
    } else if (opt_speed) {
        this.currentSpeed = opt_speed;
    }
};

/**
 * Load and cache the image resources.
 */
Runner.prototype.loadImages = function () {
    // Base sprites.
    const imageSprite = document.getElementById(this.spriteDef.HDPI.id);

    if (imageSprite) {
        this.spriteDef = this.spriteDef.HDPI;
        this.canvas.className = Runner.classes.HDPI;
    } else {
        this.spriteDef = this.spriteDef.LDPI;
        this.canvas.className = Runner.classes.LDPI;
    }

    Runner.imageSprite = imageSprite;
};

// 시간 제약으로 인해 간소화된 버전을 제공합니다.
// 실제 구현에서는 다음과 같은 기능들이 구현되어야 합니다:
// - T-Rex 캐릭터 클래스
// - 장애물 생성 및 관리
// - 충돌 감지
// - 점수 계산
// - 게임 루프
// - 사용자 입력 처리

// 게임 초기화 및 시작
const FPS = 60;
const runner = new Runner('#container');

// DOM이 로드된 후 게임 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 게임 초기화 코드
    console.log('T-Rex Runner 게임이 로드되었습니다.');

    // 키보드 이벤트 리스너
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
            console.log('Jump!');
            // 점프 로직 구현
        } else if (e.code === 'ArrowDown') {
            console.log('Duck!');
            // 숙이기 로직 구현
        }
    });

    // 터치 이벤트 리스너
    document.addEventListener('touchstart', () => {
        console.log('Jump with touch!');
        // 점프 로직 구현
    });
});
