const username = [
  'lernantino',
  'SkyWalker23',
  'TechGuru88',
  'StarryEyes42',
  'QuantumCoder',
  'LunarExplorer',
  'PixelMaster',
  'JazzMixer',
  'CyberPhoenix',
  'VelvetVortex',
  'AquaDreamer',
  ``,
];
const users = [];
const getUser = () => username[Math.floor(Math.random() * username.length)];

module.exports = getUser;
