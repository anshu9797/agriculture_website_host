jQuery(document).ready(function ($) {

    var jssor_1_SlideshowTransitions = [
      { $Duration: 500, $Delay: 30, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2049, $Easing: $Jease$.$OutQuad },

      { $Duration: 500, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad },

      { $Duration: 1000, x: -0.2, $Delay: 40, $Cols: 12, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 } },

      { $Duration: 800, y: -1, $Delay: 60, $Cols: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: { $Top: 1.5 } },

      { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } }
    ];
    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    function JssorSliderParkEventHandler(slideIndex, fromIndex) {
        var args = [slideIndex, fromIndex];
        console.log("$JssorSlider$.$EVT_PARK args: " + args.join(","));
    }

    function JssorSliderClickEventHandler(slideIndex, event) {
        var args = [slideIndex, "event"];
        console.log("$JssorSlider$.$EVT_CLICK args: " + args.join(","));
    }

    function JssorSliderMouseEnterEventHaldler() {
        console.log("$JssorSlider$.$EVT_MOUSE_ENTER");
    }

    function JssorSliderMouseLeaveEventHandler() {
        console.log("$JssorSlider$.$EVT_MOUSE_LEAVE");
    }

    function JssorSliderDragStartEventHandler(position, virtualPosition, event) {
        var args = [position, virtualPosition, "event"];
        console.log("$JssorSlider$.$EVT_DRAG_START args: " + args.join(","));
    }

    function JssorSliderDragEndEventHandler(position, virtualPosition, startPosition, virtualStartPosition, event) {
        var args = [position, virtualPosition, startPosition, virtualStartPosition, "event"];
        console.log("$JssorSlider$.$EVT_DRAG_END args: " + args.join(","));
        console.log("$LastDragSucceeded: " + jssor_1_slider.$LastDragSucceeded());
    }

    function JssorSliderSwipeStartEventHandler(position, virtualPosition) {
        var args = [position, virtualPosition];
        console.log("$JssorSlider$.$EVT_SWIPE_START args: " + args.join(","));
    }

    function JssorSliderSwipeEndEventHandler(position, virtualPosition) {
        var args = [position, virtualPosition];
        console.log("$JssorSlider$.$EVT_SWIPE_END args: " + args.join(","));
    }

    function JssorSliderLoadStartEventHandler(slideIndex) {
        var args = [slideIndex];
        console.log("$JssorSlider$.$EVT_LOAD_START args: " + args.join(","));
    }

    function JssorSliderLoadEndEventHandler(slideIndex) {
        var args = [slideIndex];
        console.log("$JssorSlider$.$EVT_LOAD_END args: " + args.join(","));
    }

    function JssorSliderFreezeEventHandler() {
        console.log("$JssorSlider$.$EVT_FREEZE");
    }

    function JssorSliderPositionChangeEventHandler(position, fromPosition, virtualPosition, virtualFromPosition) {
        var args = [position, fromPosition, virtualPosition, virtualFromPosition];
        console.log("$JssorSlider$.$EVT_POSITION_CHANGE args: " + args.join(","));
    }

    function JssorSliderStateChangeEventHandler(slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd) {
        if (progress == progressEnd) {
        }
        else if (progress == idleEnd) {
        }
        else if (progress == idleBegin) {
        }
        else if (progress == progressBegin) {
        }
        else if (progress < 0) {
            var realProgress = -progress - 1;
        }
        var args = [slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd];
        console.log("$JssorSlider$.$EVT_STATE_CHANGE args: " + args.join(","));
    }
    
    function JssorSliderProgressChangeEventHandler(slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd) {
        var progressString = Math.round(progress / progressEnd * 100) + "%";
        var args = [slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd];
        console.log("$JssorSlider$.$EVT_PROGRESS_CHANGE args: " + args.join(","));
    }

    function JssorSliderSlideshowStartEventHandler(slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd) {
        var args = [slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd];
        console.log("$JssorSlider$.$EVT_SLIDESHOW_START args: " + args.join(","));
    }

    function JssorSliderSlideshowEndEventHandler(slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd) {
        var args = [slideIndex, progress, progressBegin, slideshowBegin, slideshowEnd, progressEnd];
        console.log("$JssorSlider$.$EVT_SLIDESHOW_END args: " + args.join(","));
    }

    jssor_1_slider.$On($JssorSlider$.$EVT_PARK, JssorSliderParkEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_CLICK, JssorSliderClickEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_MOUSE_ENTER, JssorSliderMouseEnterEventHaldler);
    jssor_1_slider.$On($JssorSlider$.$EVT_MOUSE_LEAVE, JssorSliderMouseLeaveEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_DRAG_START, JssorSliderDragStartEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_DRAG_END, JssorSliderDragEndEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_SWIPE_START, JssorSliderSwipeStartEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_SWIPE_END, JssorSliderSwipeEndEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_LOAD_START, JssorSliderLoadStartEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_LOAD_END, JssorSliderLoadEndEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_FREEZE, JssorSliderFreezeEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_POSITION_CHANGE, JssorSliderPositionChangeEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_STATE_CHANGE, JssorSliderStateChangeEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_PROGRESS_CHANGE, JssorSliderProgressChangeEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_SLIDESHOW_START, JssorSliderSlideshowStartEventHandler);
    jssor_1_slider.$On($JssorSlider$.$EVT_SLIDESHOW_END, JssorSliderSlideshowEndEventHandler);


});
