var formula_box = document.getElementById("formula-box")
var result_box = document.getElementById("result-box")

result_box.value = "0"
formula_box.value = "Input formula"

function addItem(btn){
  item = btn.innerText;
  if(formula_box.value == "Input formula" ||formula_box.value == "0") formula_box.value = ""
  formula_box.value += item;
}
function clear_all(){
  formula_box.value = "0"
  result_box.value = "0"
}
function _run_formula(fm){
  try{
    return eval(`new Number(${fm})`).toFixed(4)
  }catch(e){
    return false
  }
}
function result(){
  let fm = formula_box.value,
      res = _run_formula(fm)
  if(res == false){
    result_box.value = "Invalid formular"
    result_box.classList.add("error")
  }else{
    if(result_box.classList.contains("error")) result_box.classList.remove(error)
    result_box.value = res
  }
}