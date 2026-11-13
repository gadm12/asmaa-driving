export default {
 content: ['./index.html', './src/**/*.{js,jsx}'],
 theme: { extend: {
  colors: { surface: { canvas:'#FFF9F5', panel:'#FFFFFF', raised:'#FBE8EF', border:'#E8CDD6', deep:'#FBE8EF' }, brand: {50:'#fff5f8',100:'#FBE8EF',200:'#efd0dc',300:'#9f2b5b',400:'#B8326A',500:'#B8326A',600:'#B8326A',700:'#9f2859',800:'#822248',900:'#5b203b',950:'#FBE8EF'}, slate: {100:'#30212B',200:'#48323f',300:'#604653',400:'#765965'}, stone: {200:'#48323f'}, emerald: {400:'#54765e',500:'#A7C4B0',600:'#54765e',700:'#4b6954',800:'#3c5543'}, charcoal: {800:'#1e293b',900:'#0f172a',950:'#020617'} },
  fontFamily: { sans: ['Cairo Variable','Tahoma','Arial','sans-serif'] }
 } },
 plugins: []
};
