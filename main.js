body {
  max-width: 1200px;
  margin: 2em auto;
  main {
    max-width: 80%;
    margin: 2em auto;
  }
}

// @mixin message($col: white, $bor: 1px solid #ddd, $br: 5px, $fs: 1rem, $pd: 1rem 1.25rem, $m: 1em 0, $disp: inline-block, $bg: #888, $cur: pointer) {
//   border: $bor;
//   color: $col;
//   border-radius: $br;
//   font-size: $fs;
//   padding: $pd;
//   margin: $m;
//   display: $disp;
//   background: $bg;
//   cursor: $cur;
// }

@mixin message($col, $bor, $br, $fs, $pd, $m, $disp, $cur, $bg: #888) {
  border: $bor;
  color: $col;
  border-radius: $br;
  font-size: $fs;
  padding: $pd;
  margin: $m;
  display: $disp;
  background: $bg;
  cursor: $cur;
}

.msg {
  @include message($col: white, $bor: 1px solid #ddd, $br: 5px, $fs: 1rem, $pd: 1rem 1.25rem, $m: 1em 0, $disp: inline-block, $cur: pointer, $bg);

  &:hover {
    background: #111111;
  }

  &-info {
    @extend .msg;
    background: #7ec906;

    &:hover {
      background: #487001;
    }
  }
  h1 {
    margin: 0 0 0.2em 0;
  }
}

