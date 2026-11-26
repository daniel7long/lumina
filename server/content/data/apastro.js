// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year college astronomy topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'The Sky and Its Motions', modules: [
    mod(1, 'The Sky, Seasons, Phases and Eclipses', ['Explain the apparent motion of the sky and why Earth has seasons.', 'Explain the phases of the Moon and why eclipses do not occur every month.']),
    mod(2, 'Gravity and Orbits', ['State Kepler’s three laws and use the period law.', 'Explain how Newton’s law of gravitation applies to orbits.']),
  ] },
  { n: 2, title: 'Light and Telescopes', modules: [
    mod(3, 'Light, Spectra and Temperature', ['Relate wavelength, frequency and the electromagnetic spectrum.', 'Use Wien’s law and the Stefan–Boltzmann law to relate temperature to color and luminosity.']),
    mod(4, 'Telescopes and the Doppler Shift', ['Compare refracting and reflecting telescopes and explain why aperture matters.', 'Use the Doppler shift to find the velocity of a source.']),
  ] },
  { n: 3, title: 'The Solar System', modules: [
    mod(5, 'Formation and the Terrestrial Planets', ['Explain how the solar system formed from a nebula.', 'Compare Mercury, Venus, Earth and Mars.']),
    mod(6, 'Giant Planets, Small Bodies and Exoplanets', ['Compare the gas giants and ice giants and describe asteroids, comets and the Kuiper belt.', 'Explain how transits and radial velocity find exoplanets.']),
  ] },
  { n: 4, title: 'The Sun and the Stars', modules: [
    mod(7, 'The Sun', ['Describe the structure of the Sun and how fusion powers it.', 'Describe sunspots and the solar cycle.']),
    mod(8, 'Measuring the Stars', ['Use parallax to find distances and the inverse-square law to relate brightness and distance.', 'Read a Hertzsprung–Russell diagram.']),
  ] },
  { n: 5, title: 'Stellar Evolution', modules: [
    mod(9, 'Star Formation and Main-Sequence Life', ['Describe how stars form from molecular clouds.', 'Explain why a star’s mass determines its lifetime.']),
    mod(10, 'Stellar Death and Remnants', ['Compare the fates of low-mass and high-mass stars.', 'Describe white dwarfs, neutron stars and black holes.']),
  ] },
  { n: 6, title: 'Galaxies and the Expanding Universe', modules: [
    mod(11, 'The Milky Way and Other Galaxies', ['Describe the structure of the Milky Way and the types of galaxies.', 'Explain how standard candles measure distance.']),
    mod(12, 'Hubble’s Law and the Expanding Universe', ['Use Hubble’s law to relate distance and recession velocity.', 'Interpret redshift as the expansion of space.']),
  ] },
  { n: 7, title: 'Cosmology', modules: [
    mod(13, 'The Big Bang and Its Evidence', ['List the evidence for the Big Bang: expansion, the cosmic microwave background and light-element abundances.', 'Describe the early history of the universe.']),
    mod(14, 'Dark Matter, Dark Energy and Life in the Universe', ['Explain the evidence for dark matter and dark energy.', 'Describe how astronomers search for habitable worlds and signs of life.']),
  ] },
];
