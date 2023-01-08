//Sadly, sheets mobile doesn't allow the use of buttons, so I use this awkward "onEdit" function.
function onEdit(e) {

  test=e.range.offset(-5,0).getValue()

  if (e.range.getA1Notation() == 'H6' && test=='Maintenance') {

    e.range.setValue("Submit");
    
    var weightss = e.source; 
    var record = weightss.getSheetByName("record");
    var daily = weightss.getSheetByName("weight");
    var row = record.getRange(1, 5).getValue();



    var date = daily.getRange(2, 1).getValue();
    var calories = daily.getRange(2, 2).getValue();
    var eaten = daily.getRange(2, 3).getFormula();
    var plan1 = daily.getRange(2, 4).getFormula();
    var plan2 = daily.getRange(2, 5).getFormula();
    var weight = daily.getRange(2, 6).getValue();
    if (weight > 0) {
      //append a new row the the record sheet with results from the previous day, then reset the main sheet.
      daily.getRange(2, 2).setFormula("=C2+D2+E2+C4");
      daily.getRange(2, 3).setFormula("=0");
      daily.getRange(2, 4).setFormula("=0");
      daily.getRange(2, 5).setFormula("=0");
      daily.getRange(2, 6).clearContent();

      record.appendRow([""]);
      var sourceRange = record.getRange(row - 14, 1, 14, 7);
      var destination = record.getRange(row - 14, 1, 15, 7);
      sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);

      record.getRange(row, 2).setValue(calories);
      record.getRange(row, 3).setFormula(eaten);
      record.getRange(row, 4).setFormula(plan1);
      record.getRange(row, 5).setFormula(plan2);
      record.getRange(row, 6).setValue(weight);


      //all median
      var chart = daily.getCharts()[0];
      var dates = record.getRange("record!A:A")
      var medweights = record.getRange("record!G:G")
      var max = maxxx(transposeArray(medweights.getValues())[0]);
      var min = minnn(transposeArray(medweights.getValues())[0]);

      var ranges = chart.getRanges();
      chart = chart.modify();
      ranges.forEach(function (range) { chart.removeRange(range) });
      var modifiedChart = chart.addRange(medweights);
      modifiedChart = chart.addRange(dates);
      modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
      modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
      modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
      daily.updateChart(modifiedChart);

      //all
      chart = daily.getCharts()[1];
      dates = record.getRange("record!A:A")
      var weights = record.getRange("record!F:F")
      max = maxxx(transposeArray(weights.getValues())[0]);
      min = minnn(transposeArray(weights.getValues())[0]);
      ranges = chart.getRanges();
      chart = chart.modify();
      ranges.forEach(function (range) { chart.removeRange(range) });
      modifiedChart = chart.addRange(weights);
      modifiedChart = chart.addRange(dates);
      modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
      modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
      modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
      daily.updateChart(modifiedChart);

      //100
      chart = daily.getCharts()[2];
      dates = record.getRange(row - 99, 1, 100, 1);
      weights = record.getRange(row - 99, 6, 100, 1);
      max = maxxx(transposeArray(weights.getValues())[0]);
      min = minnn(transposeArray(weights.getValues())[0]);
      ranges = chart.getRanges();
      chart = chart.modify();
      ranges.forEach(function (range) { chart.removeRange(range) });
      modifiedChart = chart.addRange(weights);
      modifiedChart = chart.addRange(dates);
      modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
      modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
      modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
      daily.updateChart(modifiedChart);
    }
  }
  //Here I change the charts when I adjust the timeframe I use to calculate maintenance calories.
  if (e.range.getA1Notation() == 'C5') {
    var weightss = e.source; 
    var record = weightss.getSheetByName("record");
    var daily = weightss.getSheetByName("weight");
    var row = record.getRange(1, 5).getValue();



    var duration = daily.getRange(5, 3).getValue();
    var calories = daily.getRange(2, 2).getValue();
    var eaten = daily.getRange(2, 3).getFormula();
    var plan1 = daily.getRange(2, 4).getFormula();
    var plan2 = daily.getRange(2, 5).getFormula();
    var weight = daily.getRange(2, 6).getValue();


    //all median
    var chart = daily.getCharts()[0];
    var dates = record.getRange("record!A:A")
    var medweights = record.getRange("record!G:G")
    var max = maxxx(transposeArray(medweights.getValues())[0]);
    var min = minnn(transposeArray(medweights.getValues())[0]);

    var ranges = chart.getRanges();
    chart = chart.modify();
    ranges.forEach(function (range) { chart.removeRange(range) });
    var modifiedChart = chart.addRange(medweights);
    modifiedChart = chart.addRange(dates);
    modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
    modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
    modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
    daily.updateChart(modifiedChart);

    //all
    chart = daily.getCharts()[1];
    dates = record.getRange("record!A:A")
    var weights = record.getRange("record!F:F")
    max = maxxx(transposeArray(weights.getValues())[0]);
    min = minnn(transposeArray(weights.getValues())[0]);
    ranges = chart.getRanges();
    chart = chart.modify();
    ranges.forEach(function (range) { chart.removeRange(range) });
    modifiedChart = chart.addRange(weights);
    modifiedChart = chart.addRange(dates);
    modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
    modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
    modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
    daily.updateChart(modifiedChart);

    //100
    chart = daily.getCharts()[2];
    dates = record.getRange(row - duration , 1, duration, 1);
    weights = record.getRange(row - duration , 6, duration, 1);
    max = maxxx(transposeArray(weights.getValues())[0]);
    min = minnn(transposeArray(weights.getValues())[0]);
    ranges = chart.getRanges();
    chart = chart.modify();
    ranges.forEach(function (range) { chart.removeRange(range) });
    modifiedChart = chart.addRange(weights);
    modifiedChart = chart.addRange(dates);
    modifiedChart = chart.setOption("vAxis.viewWindow.max", max + .1);
    modifiedChart = chart.setOption("trendlines", { 0: { type: 'linear', color: 'red', lineWidth: 3, opacity: 0.3, showR2: false, visibleInLegend: true } });
    modifiedChart = chart.setOption("vAxis.viewWindow.min", min - .1).build();
    daily.updateChart(modifiedChart);


  }
}

//A few functions I opted to write rather than find a corresponding package.
function transposeArray(array) {
  var result = [];
  for (var col = 0; col < array[0].length; col++) { 
    result[col] = [];
    for (var row = 0; row < array.length; row++) { 
      result[col][row] = array[row][col]; 
    }
  }
  return result;
}

function maxxx(array) {
  var max = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    };
  };
  return max;
};



function minnn(array) {
  var min = 100000000
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    };
  };
  return min;
};
