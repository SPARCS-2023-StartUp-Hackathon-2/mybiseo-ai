"use strict";
class SimpleFeedback {
}
class ReflectionFeedback extends SimpleFeedback {
}
var CalendarBlockType;
(function (CalendarBlockType) {
    CalendarBlockType[CalendarBlockType["sleep"] = 0] = "sleep";
    CalendarBlockType[CalendarBlockType["meal"] = 1] = "meal";
    CalendarBlockType[CalendarBlockType["workout"] = 2] = "workout";
    CalendarBlockType[CalendarBlockType["hard"] = 3] = "hard";
    CalendarBlockType[CalendarBlockType["etc"] = 4] = "etc";
})(CalendarBlockType || (CalendarBlockType = {}));
class SleepInvarianceFeedback {
    should() {
        throw new Error("Method not implemented.");
    }
    get_priority() {
        throw new Error("Method not implemented.");
    }
    get_feedback() {
        throw new Error("Method not implemented.");
    }
    get_calendar_feedback() {
        throw new Error("Method not implemented.");
    }
    get_calendar_deviation() {
        throw new Error("Method not implemented.");
    }
}
