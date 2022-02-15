for(var L = 100; L >= 100 && L <= 200; L++) {
  if( L % 3 === 0 && L % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (L % 4 === 0) {
    console.log("Lighthouse")
  } else if (L % 3 === 0)
    console.log("Loopy");
  else {
    console.log(L);
  }
}