function writeNumber(elementId) {
    var outputValueTo = document.getElementById('tudo');

    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = elementId.textContent;
    } else {
      outputValueTo.value += elementId.textContent;
    }
  }
  
  function cleartxt() {
    document.getElementById('tudo').value = '0';
    document.getElementById('decimal').disabled = false;
  }
  
  function setOperator(elementId) {
    var outputValueTo = document.getElementById('tudo');
    if(outputValueTo.value == '0' && isMinusOperador(elementId.textContent)) {
      outputValueTo.value = elementId.textContent
    } else {
      if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
        outputValueTo.value = '0';
      } else {
        outputValueTo.value += elementId.textContent;
        document.getElementById('decimal').disabled = false;
      }
    }
  }
  
  function setDecimal(elementId, status) {
    var outputValueTo = document.getElementById('tudo');
    outputValueTo.value += elementId.textContent;
    document.getElementById('decimal').disabled = status;
  }
  
  function calculate() {
  
    try {
  
      var field1txt = document.getElementById('tudo');
      if (field1txt.value != '') {
        let vf = field1txt.value.replaceAll("x", "*");
        var calculateResult = eval(vf);
        field1txt.value = calculateResult;

      }
    } catch (err) {
  
      field1txt.value = 'Syntax error';
  
    }
  
  }
  
  function removeLastNumber() {
  
    var field1txt = document.getElementById('tudo');
  
    if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
      field1txt.value = '0';
      document.getElementById('decimal').disabled = false;
    } else {
      field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
    }
  }


function isMinusOperador(valor) {
  return valor == '-'
}