abstract class SimpleFeedback {
  abstract should(): boolean;
  abstract get_feedback(): String;
}

abstract class ReflectionFeedback extends SimpleFeedback {
  abstract get_calendar_feedback(): String;
  abstract get_calendar_deviation(): String;
}

type CalendarReflection = {
  type: CalendarBlockType;
  start_time?: Date;
  end_time?: Date;
  time?: Date;
};

enum CalendarBlockType {
  sleep,
  meal,
  workout,
  hard,
  etc,
}

class SleepStartVarianceFeedback implements ReflectionFeedback {
  get_calendar_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_deviation(): String {
    throw new Error("Method not implemented.");
  }
  should(): boolean {
    throw new Error("Method not implemented.");
  }
  get_feedback(): String {
    throw new Error("Method not implemented.");
  }
}

class SleepTimeVarianceFeedback implements ReflectionFeedback {
  should(): boolean {
    throw new Error("Method not implemented.");
  }
  get_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_deviation(): String {
    throw new Error("Method not implemented.");
  }
}

class MealCountVarianceFeedback implements ReflectionFeedback {
  get_calendar_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_deviation(): String {
    throw new Error("Method not implemented.");
  }
  should(): boolean {
    throw new Error("Method not implemented.");
  }
  get_feedback(): String {
    throw new Error("Method not implemented.");
  }
}

class MealTimeVarianceFeedback implements ReflectionFeedback {
  get_calendar_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_deviation(): String {
    throw new Error("Method not implemented.");
  }
  should(): boolean {
    throw new Error("Method not implemented.");
  }
  get_feedback(): String {
    throw new Error("Method not implemented.");
  }
}

class WorkoutFeedback implements ReflectionFeedback {
  get_calendar_feedback(): String {
    throw new Error("Method not implemented.");
  }
  get_calendar_deviation(): String {
    throw new Error("Method not implemented.");
  }
  should(): boolean {
    throw new Error("Method not implemented.");
  }
  get_feedback(): String {
    throw new Error("Method not implemented.");
  }
}
