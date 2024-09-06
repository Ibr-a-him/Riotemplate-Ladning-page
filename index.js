
  const toggleMenuButton = document.getElementById('toggle-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });



//      var glide09 = new Glide('.glide-09', {
//   type: 'carousel',
//   autoplay: 1,
//   animationDuration: 4500,
//   animationTimingFunc: 'linear',
//   perView: 3,
//   classes: {
//     activeNav: '[&>*]:bg-slate-700',
//   },
//   breakpoints: {
//     1024: {
//       perView: 2,
//     },
//     640: {
//       perView: 1,
//       gap: 36,
//     },
//   },
// });

// glide09.mount();
    


// var glide07 = new Glide('.glide-08', {
//         type: 'carousel',
//         focusAt: 1,
//         animationDuration: 4000,
//         autoplay: 4500,
//         autoplay: true,
//         rewind: true,
//         perView: 2,
//         gap: 48
//         classes: {
//             activeNav: '[&>*]:bg-slate-700',
//         },
//         breakpoints: {
//             1024: {
//                 perView: 2
//             },
//             640: {
//                 perView: 1
//             }
//         },
//     });

//     glide07.mount();

 

// Initialize Glide for the first carousel
var glide09 = new Glide('.glide-09', {
  type: 'carousel',
  autoplay: 1,
  animationDuration: 4500,
  animationTimingFunc: 'linear',
  perView: 3,
  classes: {
    activeNav: '[&>*]:bg-slate-700',
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
      gap: 36,
    },
  },
});

glide09.mount();

// Initialize Glide for the second carousel
var glide07 = new Glide('.glide-07', { // Make sure this class name matches the HTML
  type: 'carousel',
  focusAt: 1,
  animationDuration: 4000,
  autoplay: 4500,
  rewind: true,
  perView: 2,
  gap: 48,
  classes: {
    activeNav: '[&>*]:bg-slate-700',
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
});

glide07.mount();
