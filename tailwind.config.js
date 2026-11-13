export default {
 content: ['./index.html', './src/**/*.{js,jsx}'],
 theme: { extend: {
  colors: { surface: { canvas:'#1C141B', panel:'#30212B', raised:'#3D2B37', border:'#59404F', deep:'#160F15' }, brand: {50:'#fff5f8',100:'#FBE8EF',200:'#efd0dc',300:'#F0A8C4',400:'#E77FA9',500:'#B8326A',600:'#B8326A',700:'#9f2859',800:'#822248',900:'#5b203b',950:'#3D182C'}, slate: {100:'#FFF9F5',200:'#F3E4EB',300:'#D9C2CE',400:'#BCA0AF'}, stone: {200:'#F3E4EB'}, emerald: {400:'#A7C4B0',500:'#A7C4B0',600:'#54765e',700:'#4b6954',800:'#3c5543'}, charcoal: {800:'#1e293b',900:'#0f172a',950:'#020617'} },
  fontFamily: { sans: ['Cairo Variable','Tahoma','Arial','sans-serif'] }
 } },
 plugins: []
};
