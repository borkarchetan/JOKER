**Activity Selection Problem:**

The Activity Selection Problem is a classic optimization problem in which we have a set of activities, each represented by a start time and finish time. The goal is to find the maximum number of non-overlapping activities that can be performed, assuming that a person can only work on a single activity at a time.

**Java Implementation:**

Let's implement the Activity Selection Problem in Java using the greedy approach:

```java
import java.util.*;

class Activity {
    int start;
    int finish;

    public Activity(int start, int finish) {
        this.start = start;
        this.finish = finish;
    }
}

public class ActivitySelection {

    public static List<Activity> selectActivities(Activity[] activities) {
        List<Activity> selectedActivities = new ArrayList<>();

        // Sort activities by finish time in ascending order
        Arrays.sort(activities, Comparator.comparingInt(a -> a.finish));

        // Select the first activity (with the earliest finish time)
        selectedActivities.add(activities[0]);
        int lastFinishTime = activities[0].finish;

        // Iterate through the remaining activities and select non-overlapping ones
        for (int i = 1; i < activities.length; i++) {
            if (activities[i].start >= lastFinishTime) {
                selectedActivities.add(activities[i]);
                lastFinishTime = activities[i].finish;
            }
        }

        return selectedActivities;
    }

    public static void main(String[] args) {
        Activity[] activities = {
            new Activity(1, 4),
            new Activity(3, 5),
            new Activity(0, 6),
            new Activity(5, 7),
            new Activity(3, 9),
            new Activity(5, 9),
            new Activity(6, 10),
            new Activity(8, 11),
            new Activity(8, 12),
            new Activity(2, 14),
            new Activity(12, 16)
        };

        List<Activity> selectedActivities = selectActivities(activities);
        System.out.println("Selected Activities: ");
        for (Activity activity : selectedActivities) {
            System.out.println("Start: " + activity.start + ", Finish: " + activity.finish);
        }
    }
}
```

**Output:**

```
Selected Activities:
Start: 1, Finish: 4
Start: 5, Finish: 7
Start: 8, Finish: 11
Start: 12, Finish: 16
```

**Time Complexity:**

The time complexity of the Activity Selection Problem using the greedy approach is O(n log n), where n is the number of activities. The dominant factor in the time complexity comes from sorting the activities based on their finish times.

**Space Complexity:**

The space complexity of the Activity Selection Problem implementation is O(n), where n is the number of activities. The selectedActivities list stores the non-overlapping activities, which can have at most n elements.

**Summary:**

The Activity Selection Problem is implemented in Java using the greedy approach. The output shows the selected non-overlapping activities with their start and finish times. The time complexity is O(n log n) due to sorting, and the space complexity is O(n) to store the selected activities. The greedy algorithm efficiently finds a maximum set of non-overlapping activities.