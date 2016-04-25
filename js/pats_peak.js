/*
 *  This file is for the Bretton Woods Dynamic Ski Map
 *  It will pull in a JSON file and load up the open / closed trails onto
 *  an image displayed using HTML.
 *
 *  File created: 1/28/2016 12:30PM EST
 *   Last edited: 1/28/2016 12:30PM EST
 *    Created by: Jason Downing
 *
 */
var ski_data;

/*
    Global color variables
    Red   = CLOSED
    Green = OPEN
*/
var open_color = "006600";
var closed_color = "A30002";


// JSON for pats.
var nov15_json = {
  "waterville_closed": [
    "#Backdraft",
    "#Breeze",
    "#East_Wind",
    "#Duster",
    "#Cyclone",
    "#Tornado",
    "#Zephyr",
    "#Lower_East_Wind",
    "#Squall_Line",
    "#Blast",
    "#Lower_Tornado",
    "#Begginners_Area",
    "#Hurricane",
    "#Hurricane",
    "#Hurricane",
    "#Vortex",
    "#FIS_Race_Trail",
    "#Twister",
    "#Downdraft",
    "#Tubing_Park",
    "#Bluster",
    "#Turbulence_Park",
    "#Whisper",
    "#Puff",
    "#Cascade_Brook",
    "#Blizzard",
    "#Tempest",
    "#NorthEaster",
    "#Crosswind"
  ],
  "waterville_open": [
  ]
};

var dec15_json = {
  "waterville_closed": [
      "#Hurricane",
      "#Hurricane",
      "#Vortex",
      "#FIS_Race_Trail",
      "#Twister",
      "#Downdraft",
      "#Tubing_Park",
      "#Bluster",
      "#Turbulence_Park",
      "#Whisper",
      "#Puff",
      "#Cascade_Brook",
      "#Blizzard",
      "#Tempest",
      "#NorthEaster",
      "#Crosswind"
  ],
  "waterville_open": [
      "#Backdraft",
      "#Breeze",
      "#East_Wind",
      "#Duster",
      "#Cyclone",
      "#Tornado",
      "#Zephyr",
      "#Lower_East_Wind",
      "#Squall_Line",
      "#Blast",
      "#Lower_Tornado",
      "#Begginners_Area",
      "#Hurricane",
  ]
};

var jan15_json = {
    "waterville_closed": [
      "#Hurricane",
      "#Hurricane",
      "#Vortex",
      "#FIS_Race_Trail",
      "#Twister",
      "#Downdraft",
      "#Tubing_Park",
      "#Bluster",
      "#Turbulence_Park",
      "#Whisper",
      "#Puff",
      "#Cascade_Brook",
      "#Blizzard",
      "#Tempest",
      "#NorthEaster",
      "#Crosswind"
    ],
    "waterville_open": [
      "#Backdraft",
      "#Breeze",
      "#East_Wind",
      "#Duster",
      "#Cyclone",
      "#Tornado",
      "#Zephyr",
      "#Lower_East_Wind",
      "#Squall_Line",
      "#Blast",
      "#Lower_Tornado",
      "#Begginners_Area",
      "#Hurricane",
    ]
};

var feb15_json = {
    "waterville_closed": [
    ],
    "waterville_open": [
      "#Backdraft",
      "#Breeze",
      "#East_Wind",
      "#Duster",
      "#Cyclone",
      "#Tornado",
      "#Zephyr",
      "#Lower_East_Wind",
      "#Squall_Line",
      "#Blast",
      "#Lower_Tornado",
      "#Begginners_Area",
      "#Hurricane",
      "#Hurricane",
      "#Hurricane",
      "#Vortex",
      "#FIS_Race_Trail",
      "#Twister",
      "#Downdraft",
      "#Tubing_Park",
      "#Bluster",
      "#Turbulence_Park",
      "#Whisper",
      "#Puff",
      "#Cascade_Brook",
      "#Blizzard",
      "#Tempest",
      "#NorthEaster",
      "#Crosswind"
    ]
};

var mar15_json = {
    "waterville_closed": [
      "#Blizzard",
      "#Tempest",
      "#NorthEaster",
      "#Crosswind"
    ],
    "waterville_open": [
      "#Backdraft",
      "#Breeze",
      "#East_Wind",
      "#Duster",
      "#Cyclone",
      "#Tornado",
      "#Zephyr",
      "#Lower_East_Wind",
      "#Squall_Line",
      "#Blast",
      "#Lower_Tornado",
      "#Begginners_Area",
      "#Hurricane",
      "#Hurricane",
      "#Hurricane",
      "#Vortex",
      "#FIS_Race_Trail",
      "#Twister",
      "#Downdraft",
      "#Tubing_Park",
      "#Bluster",
      "#Turbulence_Park",
      "#Whisper",
      "#Puff",
      "#Cascade_Brook",
    ]
};

var apr15_json = {
    "waterville_closed": [
      "#Backdraft",
      "#Breeze",
      "#East_Wind",
      "#Duster",
      "#Cyclone",
      "#Tornado",
      "#Zephyr",
      "#Lower_East_Wind",
      "#Squall_Line",
      "#Blast",
      "#Lower_Tornado",
      "#Begginners_Area",
      "#Hurricane",
      "#Hurricane",
      "#Hurricane",
      "#Vortex",
      "#FIS_Race_Trail",
      "#Twister",
      "#Downdraft",
      "#Tubing_Park",
      "#Bluster",
      "#Turbulence_Park",
      "#Whisper",
      "#Puff",
      "#Cascade_Brook",
      "#Blizzard",
      "#Tempest",
      "#NorthEaster",
      "#Crosswind"
    ],
    "waterville_open": [

    ]
};

$(function(){
  $("#ski_area_map").load("maps/pats_peak.map");
  $('img[usemap]').rwdImageMaps();

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
});

$(document).ready(function() {
  // Get open / closed trails from json file "ski.json"
  // https://stackoverflow.com/questions/15764844/jquery-getjson-save-result-into-variable
  // $.getJSON("json/ski.json", function(data) {
  //   ski_data = data;
  // });

  // This is from the maphilight docs, and has been changed for the Ski Trail
  // highlighting to look "better", basically yellowish instead of dark gray.
  $.fn.maphilight.defaults = {
    fill: true,
    fillColor: closed_color,
    fillOpacity: 0.5,
    stroke: false,
    strokeColor: '000000',
    strokeOpacity: 1,
    strokeWidth: 1,
    fade: false,
    alwaysOn: true,
    neverOn: false,
    groupBy: false,
    wrapClass: true,
    shadow: false,
    shadowX: 0,
    shadowY: 0,
    shadowRadius: 6,
    shadowColor: '000000',
    shadowOpacity: 0.8,
    shadowPosition: 'outside',
    shadowFrom: false
  }

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
  $('img[usemap]').rwdImageMaps();

  // This is a total hack, but if it works, I'm happy.
  color_yellow();
  color_red();

});

// Change all the highlighting to yellow.
function color_yellow() {
  var trails_on = [];

  // This goes through and changes all the maphilight data "fillColor" properties
  // to "FFEA1C" which is the same yellow color I set as "default" for all areas.
  $("area").each(function(){
    console.log("CHANGING COLORS to YELLOW");
    $(this).data('maphilight', {"fillColor": open_color});
    trails_on.push($(this).attr("alt"));
  });

  // All trails
  console.log(trails_on);

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
  $('img[usemap]').rwdImageMaps();

  return true;
}

// Change all the highlighting to red.
function color_red() {
  // This goes through and changes all the maphilight data "fillColor" properties
  // to "A30002" which is a red color.
  $("area").each(function(){
    console.log("CHANGING COLORS to RED");
    $(this).data('maphilight', {"fillColor": closed_color});
  });

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
  $('img[usemap]').rwdImageMaps();

  return true;
}

// Change just "lower bobby's run" to blue.
function bobbys_run() {
  // This only changes one ID, as a proof of concept for dynamically styling each
  // trail area.
  console.log("CHANGING COLORS to BLUE for BOBBYS RUN");

  $("area").each(function(){
    var compare = "Upper Bobbys";

    //console.log("Trail: " + compare + " attr: " + $(this).attr("alt"));

    if(compare == $(this).attr("alt")) {
      console.log("Changing color for Bobby's Run");
      $(this).data('maphilight', {"fillColor": open_color});
    }
  });

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
  $('img[usemap]').rwdImageMaps();

  return true;
}

// Change the highlighting given a list of trails.
function color_list() {
  console.log(ski_data);

  // List of trails open / closed.
  var open_trails = ski_data.waterville_open;
  var closed_trails = ski_data.waterville_closed;

  console.log("open trails: " + open_trails);
  console.log("closed trails: " + closed_trails);

  // Open Trails
  $("area").each(function(){
    for (trail in open_trails) {
      var compare = open_trails[trail];

      if(compare == $(this).attr("alt")) {
        $(this).data('maphilight', {"fillColor": open_color});
      }
    }
  });

  // Closed Trails
  $("area").each(function(){
    for (trail in closed_trails) {
      var compare = closed_trails[trail];

      if(compare == $(this).attr("alt")) {
        $(this).data('maphilight', {"fillColor": closed_color});
      }
    }
  });

  // Center the map using this helpful SO post
  // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
  $('.map').maphilight().parent().addClass('center-map_pats');
  $('img[usemap]').rwdImageMaps();

  return true;
}


//*******************************************************************************
// imported from the waterville.js file
// Update map function.
// Given a JSON file name, it will update the waterville valley page.
function update_map(filename) {
    console.log(filename);

    // List of trails open / closed.
    var open_trails = filename.waterville_open;
    var closed_trails = filename.waterville_closed;

    console.log("open trails: " + open_trails);
    console.log("closed trails: " + closed_trails);

    // Open Trails
    $("area").each(function(){
      for (trail in open_trails) {
        var compare = open_trails[trail];

        if(compare == $(this).attr("alt")) {
          $(this).data('maphilight', {"fillColor":open_color});
        }
      }
    });

    // Closed Trails
    $("area").each(function(){
      for (trail in closed_trails) {
        var compare = closed_trails[trail];

        if(compare == $(this).attr("alt")) {
          $(this).data('maphilight', {"fillColor":closed_color});
        }
      }
    });

    // Must call this to update the map!
    // Center the map using this helpful SO post
    // https://stackoverflow.com/questions/1760586/how-to-align-the-jquery-maphilight-to-center
    $('.map').maphilight().parent().addClass('center-map_pats');
}


// Update the sidebar with a list of trails based on filename given.
// IDEA: ADD SCROLL WHEEL.
function update_sidebar(filename) {
  // Empty IDs
  $( "#open_trails" ).empty();
  $( "#closed_trails" ).empty();

  // Add open trails.
  for(var open in filename.waterville_open) {
    //console.log("open is: " + filename.waterville_open[open])
    $("#open_trails").append("<div>" + filename.waterville_open[open] + "</div>");
  }

  // Add closed trails.
  for(var closed in filename.waterville_closed) {
    //console.log("closed is: " + filename.waterville_closed[closed])
    $("#closed_trails").append("<div>" + filename.waterville_closed[closed] + "</div>");
  }
}


// This will be a demo function to change the map we have working,
// with fake data.
function change_day(date) {
  // Change date based on input.
  if(date == "nov15") {
    update_map(nov15_json);
    update_sidebar(nov15_json);

    return true;
  }

  if(date == "dec15") {
    update_map(dec15_json);
    update_sidebar(dec15_json);

    return true;
  }

  if(date == "jan15") {
    update_map(jan15_json);
    update_sidebar(jan15_json);

    return true;
  }

  if(date == "feb15") {
    update_map(feb15_json);
    update_sidebar(feb15_json);

    return true;
  }

  if(date == "mar15") {
    update_map(mar15_json);
    update_sidebar(mar15_json);

    return true;
  }

  if(date == "apr15") {
    update_map(apr15_json);
    update_sidebar(apr15_json);

    return true;
  }

  if(date == "may15") {
    update_map(nov15_json);   // Nov15 because all closed.
    update_sidebar(nov15_json);

    return true;
  }

  else {
    console.log("Error, given invalid date.\n");
  }
}
