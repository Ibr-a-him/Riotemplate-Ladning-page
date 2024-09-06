// module.exports = {
//   theme: {
//     extend: {
//       transitionTimingFunction: {
//         'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
//         'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
//       },
//     },
//   },
// };

module.exports = {
  theme: {
    extend: {
      // Add custom transition timing functions
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      // Add keyframes for sliding animation
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(0)' }, // Start and end at the same point
          '14.28%': { transform: 'translateX(-100%)' }, // After each percentage, move to the next card
          '28.56%': { transform: 'translateX(-200%)' },
          '42.84%': { transform: 'translateX(-300%)' },
          '57.12%': { transform: 'translateX(-400%)' },
          '71.40%': { transform: 'translateX(-500%)' },
          '85.68%': { transform: 'translateX(-600%)' },
        },
      },
      // Add animation for the slide
      animation: {
        'slide-cards': 'slide 14s infinite', // 7 cards, so the total duration is 14 seconds
      },
    },
  },
  plugins: [],
};
