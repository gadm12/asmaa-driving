export default {
 content: ['./index.html', './src/**/*.{js,jsx}'],
 theme: { extend: {
  colors: { surface: { canvas:'#101318', panel:'#191e25', raised:'#222933', border:'#343e4b', deep:'#0b0e12' }, brand: {50:'#fff7ed',100:'#ffedd5',200:'#fed7aa',300:'#fdba74',400:'#fb923c',500:'#f97316',600:'#ea580c',700:'#c2410c',800:'#9a3412',900:'#7c2d12',950:'#431407'}, charcoal: {800:'#1e293b',900:'#0f172a',950:'#020617'} },
  fontFamily: { sans: ['Cairo Variable','Tahoma','Arial','sans-serif'] }
 } },
 plugins: []
};
