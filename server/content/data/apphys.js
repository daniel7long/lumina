// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year, algebra-based physics (AP Physics 1) topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Kinematics', modules: [
    mod(1, 'Motion in One Dimension', ['Distinguish distance, displacement, speed, velocity and acceleration.', 'Read and sketch position, velocity and acceleration graphs and relate them to each other.', 'Solve constant-acceleration problems with the kinematic equations, including free fall.']),
    mod(2, 'Motion in Two Dimensions', ['Add and resolve vectors into components.', 'Treat the horizontal and vertical parts of projectile motion independently.', 'Find the time of flight, range and maximum height of a projectile.']),
  ] },
  { n: 2, title: 'Force and Translational Dynamics', modules: [
    mod(3, 'Newton’s Laws and Free-Body Diagrams', ['State Newton’s three laws and apply them to everyday situations.', 'Draw a free-body diagram that shows only the forces acting on one object.', 'Find the net force and acceleration from a free-body diagram.']),
    mod(4, 'Friction, Inclines and Connected Objects', ['Use static and kinetic friction models.', 'Resolve weight into components parallel and perpendicular to an incline.', 'Solve problems with two objects connected by a string.']),
  ] },
  { n: 3, title: 'Circular Motion and Gravitation', modules: [
    mod(5, 'Uniform Circular Motion', ['Explain why an object moving in a circle accelerates even at constant speed.', 'Use a = v²/r and identify which force supplies the centripetal force.']),
    mod(6, 'Universal Gravitation', ['Apply Newton’s law of universal gravitation and the inverse-square relationship.', 'Distinguish gravitational field strength g from the constant G.', 'Relate orbital speed and radius for circular orbits.']),
  ] },
  { n: 4, title: 'Energy', modules: [
    mod(7, 'Work and Kinetic Energy', ['Calculate the work done by a constant force at an angle to the displacement.', 'Apply the work–energy theorem.']),
    mod(8, 'Potential Energy, Conservation and Power', ['Use gravitational and elastic potential energy.', 'Apply conservation of mechanical energy and account for non-conservative work.', 'Calculate power as the rate of energy transfer.']),
  ] },
  { n: 5, title: 'Momentum', modules: [
    mod(9, 'Impulse and Momentum', ['Define momentum and impulse and relate impulse to the change in momentum.', 'Use a force–time graph to find impulse.']),
    mod(10, 'Collisions and Conservation of Momentum', ['Apply conservation of momentum to an isolated system.', 'Classify collisions as elastic, inelastic or perfectly inelastic using kinetic energy.']),
  ] },
  { n: 6, title: 'Torque and Rotational Motion', modules: [
    mod(11, 'Torque and Static Equilibrium', ['Calculate torque from force, lever arm and angle.', 'Use the conditions of translational and rotational equilibrium to find unknown forces.']),
    mod(12, 'Rotational Motion and Angular Momentum', ['Relate angular displacement, velocity and acceleration, and link them to linear quantities.', 'Explain rotational inertia and apply conservation of angular momentum.']),
  ] },
  { n: 7, title: 'Oscillations and Waves', modules: [
    mod(13, 'Simple Harmonic Motion', ['Identify the restoring force in a mass–spring system and a simple pendulum.', 'Calculate the period of a spring and a pendulum and say what each depends on.']),
    mod(14, 'Mechanical Waves and Sound', ['Use v = fλ and relate wave speed to the medium.', 'Describe superposition, standing waves and resonance in strings and pipes.']),
  ] },
  { n: 8, title: 'Electric Charge and Circuits', modules: [
    mod(15, 'Electric Charge and Coulomb’s Law', ['Explain charging by friction, contact and induction using conservation of charge.', 'Apply Coulomb’s law and compare it with gravitation.']),
    mod(16, 'DC Circuits', ['Apply Ohm’s law and the power formulas.', 'Find equivalent resistance for series and parallel combinations.', 'Use Kirchhoff’s rules in simple circuits.']),
  ] },
];
