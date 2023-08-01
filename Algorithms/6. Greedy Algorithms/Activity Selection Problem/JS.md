**Activity Selection Problem:**

The Activity Selection Problem is a classic optimization problem in which we have a set of activities, each represented by a start time and finish time. The goal is to find the maximum number of non-overlapping activities that can be performed, assuming that a person can only work on a single activity at a time.

**JavaScript Implementation:**

Let's implement the Activity Selection Problem in JavaScript using the greedy approach:

```javascript
function selectActivities(activities) {
    activities.sort((a, b) => a.finish - b.finish);

    const selectedActivities = [activities[0]];
    let lastFinishTime = activities[0].finish;

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastFinishTime) {
            selectedActivities.push(activities[i]);
            lastFinishTime = activities[i].finish;
        }
    }

    return selectedActivities;
}

const activities = [
    { start: 1, finish: 4 },
    { start: 3, finish: 5 },
    { start: 0, finish: 6 },
    { start: 5, finish: 7 },
    { start: 3, finish: 9 },
    { start: 5, finish: 9 },
    { start: 6, finish: 10 },
    { start: 8, finish: 11 },
    { start: 8, finish: 12 },
    { start: 2, finish: 14 },
    { start: 12, finish: 16 }
];

const selectedActivities = selectActivities(activities);
console.log("Selected Activities:");
selectedActivities.forEach(activity => {
    console.log(`Start: ${activity.start}, Finish: ${activity.finish}`);
});
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

The space complexity of the Activity Selection Problem implementation is O(n), where n is the number of activities. The selectedActivities array stores the non-overlapping activities, which can have at most n elements.

**Summary:**

The Activity Selection Problem is implemented in JavaScript using the greedy approach. The output shows the selected non-overlapping activities with their start and finish times. The time complexity is O(n log n) due to sorting, and the space complexity is O(n) to store the selected activities. The greedy algorithm efficiently finds a maximum set of non-overlapping activities.