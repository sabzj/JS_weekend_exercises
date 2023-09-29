// Mask;

function maskify(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmask()", 1);
}
v = 4556364607935616;
function execmask() {
  v_obj.value = v_fun(v_obj.value);
}

function mphone(v) {
  v = v.replace(/\D/g, "");
  v = v.substring(0, 11);
  v = v.replace(/^(\d{2})(\d)/g, "(OXX$1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}
console.log(v);
