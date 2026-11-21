import { mc, tf } from '../builder.js';

export default {
  summary: 'Use integrals to find average values, net change, areas between curves and volumes of revolution.',
  modules: {
    15: {
      summary: 'Average value, net change and area between curves.',
      sessions: [{
        t: 'Average value, net change and area',
        s: 'Three uses of the definite integral.',
        md: `
## Average value
The average value of f on [a, b] is

**f_avg = (1/(b − a)) ∫ₐᵇ f(x) dx**

For f(x) = x² on [0, 3]: (1/3)(9) = **3**.

## Net change
If r(t) is a rate, ∫ₐᵇ r(t) dt is the **net change** in the quantity from a to b. If water flows in at r(t) = 2t liters/min, the amount added from t = 0 to 5 is ∫₀⁵ 2t dt = **25 liters**.

## Area between curves
When f(x) ≥ g(x) on [a, b], the area between them is

**∫ₐᵇ [f(x) − g(x)] dx**

(top minus bottom). To find the limits, solve f(x) = g(x).

**Example:** between y = 2x and y = x²: they meet at x = 0 and x = 2, and the line is on top, so the area is ∫₀² (2x − x²) dx = 4 − 8/3 = **4/3**.
`,
        q: [
          mc('What is the average value of f(x) = 2x on [0, 4]?', '4', '(1/4)∫₀⁴ 2x dx = (1/4)(16) = 4.', [
            ['16', 'This is the integral, which still has to be divided by the interval length 4.'],
            ['8', 'This is f(4), the value at the right endpoint.'],
            ['2', 'This is the slope, not the average value.'],
          ]),
          mc('What is the area between y = 2x and y = x² from x = 0 to x = 2?', '4/3', '∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3.', [
            ['8/3', 'This is the integral of x² alone; the line’s contribution was not subtracted correctly.'],
            ['4', 'This is the integral of 2x alone, the area under the line.'],
            ['−4/3', 'Area cannot be negative; use top minus bottom.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Volumes by disks and washers.',
      sessions: [{
        t: 'Volumes of revolution',
        s: 'Disks and washers about the x-axis.',
        md: `
## Solids of revolution
Rotating a region about an axis creates a solid. Slice it perpendicular to the axis.

### Disk method
For a region between y = R(x) and the x-axis on [a, b], rotated about the x-axis:

**V = π ∫ₐᵇ [R(x)]² dx**

**Example:** y = x on [0, 3]: V = π∫₀³ x² dx = π(9) = **9π** (a cone).

### Washer method
If the region lies between an outer curve R(x) and an inner curve r(x), there is a hole:

**V = π ∫ₐᵇ ([R(x)]² − [r(x)]²) dx**

**Example:** between y = x and y = x² on [0, 1]: V = π∫₀¹ (x² − x⁴) dx = π(1/3 − 1/5) = **2π/15**.

> Square the radii **before** subtracting. (R − r)² is not the same as R² − r².
`,
        q: [
          mc('The region under y = x from x = 0 to x = 3 is rotated about the x-axis. What is the volume?', '9π', 'V = π∫₀³ x² dx = π · 27/3 = 9π.', [
            ['27π', 'The integral of x² is x³/3, so 27 must be divided by 3.'],
            ['9', 'The factor π is missing.'],
            ['3π', 'This is π × (the upper limit), which is not the integral.'],
          ]),
          mc('The region between y = x and y = x² from 0 to 1 is rotated about the x-axis. What is the volume?', '2π/15', 'Washers: π∫₀¹ (x² − x⁴) dx = π(1/3 − 1/5) = 2π/15.', [
            ['π/6', 'This is π times the area between the curves; volume needs squared radii.'],
            ['π(1/3 + 1/5)', 'The inner radius term must be subtracted, not added.'],
            ['π/3', 'This ignores the hole created by the inner curve.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Applications of integration',
    tasks: [
      mc('What is the average value of f(x) = 3x² on [0, 2]?', '4', '(1/2)∫₀² 3x² dx = (1/2)(8) = 4.', [
        ['8', 'This is the integral; it must be divided by the interval length 2.'],
        ['12', 'This is f(2), the value at the right endpoint.'],
        ['2', 'This is the length of the interval.'],
      ]),
      mc('What is the area between y = x + 2 and y = x²?', '9/2', 'They intersect at x = −1 and x = 2, and ∫₋₁² (x + 2 − x²) dx = 9/2.', [
        ['9', 'This is twice the correct area.'],
        ['3', 'This ignores the part of the region between x = −1 and x = 0.'],
        ['−9/2', 'Area cannot be negative; use top minus bottom.'],
      ]),
      mc('Water flows into a tank at r(t) = 2t liters per minute. How much enters between t = 0 and t = 5?', '25 liters', 'The net change is ∫₀⁵ 2t dt = 25.', [
        ['10 liters', 'This is r(5), the rate at the end, not the total amount.'],
        ['50 liters', 'This is 2·25; the antiderivative of 2t is t², not 2t².'],
        ['5 liters', 'This is the length of the time interval.'],
      ]),
      mc('The region under y = x² from x = 0 to x = 2 is rotated about the x-axis. What is the volume?', '32π/5', 'V = π∫₀² x⁴ dx = π · 32/5.', [
        ['8π/3', 'This is π∫ x² dx, which uses the radius x instead of x².'],
        ['32/5', 'The factor π is missing.'],
        ['16π', 'This is π × 2⁴, without dividing by 5.'],
      ]),
      mc('The region between y = x and y = x² (0 ≤ x ≤ 1) is rotated about the x-axis. Which integral gives the volume?', 'π ∫₀¹ (x² − x⁴) dx', 'Washers: outer radius x and inner radius x², so the area is π(R² − r²).', [
        ['π ∫₀¹ (x − x²)² dx', 'This squares the difference of the radii instead of subtracting the squares.'],
        ['π ∫₀¹ (x⁴ − x²) dx', 'The outer and inner radii are swapped, which gives a negative value.'],
        ['∫₀¹ (x − x²) dx', 'This is the area between the curves, not a volume.'],
      ]),
      tf('The average value of f on [a, b] equals (f(a) + f(b))/2.', false, 'That formula holds for a straight line, but in general the average value is (1/(b − a))∫ f dx.', 'Correct. For f(x) = x² on [0, 3], the average value is 3, while (f(0) + f(3))/2 = 4.5.'),
    ],
  },
};
