var mock = {};

mock.output = {
  "graph": {
    "node_attributes": [{
      "DataType": "index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "id",
      "Name": "ID"
    }, {
      "DataType": "categorical",
      "Type": "string",
      "Unique": "false",
      "DisplayName": "label",
      "Name": "Label"
    }, {
      "DataType": "id",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "structure",
      "Name": "StructureID"
    }, {
      "DataType": "quantitative",
      "Type": "float",
      "Unique": "false",
      "DisplayName": "completeness",
      "Name": "Completeness"
    }, {
      "DataType": "quantitative",
      "Type": "float",
      "Unique": "false",
      "DisplayName": "area",
      "Name": "HullArea"
    }, {
      "DataType": "quantitative",
      "Type": "int",
      "Unique": "false",
      "DisplayName": "locations",
      "Name": "Locations"
    }
    ],
    "nodes": [{
      "Completeness": 0.3333333333333333,
      "HullArea": 161365000.0,
      "StructureID": 168,
      "Locations": 1335.0,
      "Label": "CBb3m",
      "ID": 168
    }, {
      "Completeness": 1.0,
      "HullArea": 102335000.0,
      "StructureID": 35894,
      "Locations": 434.0,
      "Label": "YAC",
      "ID": 35894
    }, {
      "Completeness": 0.3333333333333333,
      "HullArea": 120611000.0,
      "StructureID": 120,
      "Locations": 100.0,
      "Label": "CBb3m",
      "ID": 120
    }, {
      "Completeness": 1.0,
      "HullArea": 170611000.0,
      "StructureID": 142,
      "Locations": 1438.0,
      "Label": "GC",
      "ID": 142
    }, {
      "Completeness": .50,
      "HullArea": 150611000.0,
      "StructureID": 1,
      "Locations": 100.0,
      "Label": "IAC",
      "ID": 1
    }, {
      "Completeness": 1.0,
      "HullArea": 136599000.0,
      "StructureID": 1724,
      "Locations": 1085.0,
      "Label": "CBb3m",
      "ID": 1724
    }, {
      "Completeness": 1.0,
      "HullArea": 5281200000.0,
      "StructureID": 5107,
      "Locations": 3299.0,
      "Label": "GC",
      "ID": 5107
    }, {
      "Completeness": 1.0,
      "HullArea": 2300110000.0,
      "StructureID": 18693,
      "Locations": 1327.0,
      "Label": "AC",
      "ID": 18693
    }],
    "edges": [{
      "LinkedStructures": "12 -> 13",
      "SourceStructureID": 168,
      "TargetStructureID": 18693,
      "TargetID": 18693,
      "SourceID": 168,
      "Type": "Ribbon Synapse",
      "ID": 0
    }, {
      "LinkedStructures": "1 -> 2",
      "SourceStructureID": 1724,
      "TargetStructureID": 35894,
      "TargetID": 35894,
      "SourceID": 1724,
      "Type": "Ribbon Synapse",
      "ID": 1
    }, {
      "LinkedStructures": "1 -> 2",
      "SourceStructureID": 18693,
      "TargetStructureID": 1724,
      "TargetID": 1724,
      "SourceID": 18693,
      "Type": "Conventional",
      "ID": 2
    }, {
      "LinkedStructures": "1 -> 2",
      "SourceStructureID": 120,
      "TargetStructureID": 1,
      "TargetID": 1,
      "SourceID": 120,
      "Type": "Ribbon Synapse",
      "ID": 3
    }, {
      "LinkedStructures": "1 -> 2",
      "SourceStructureID": 1,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 1,
      "Type": "Conventional",
      "ID": 4
    }, {
      "LinkedStructures": "1 -> 2",
      "SourceStructureID": 1,
      "TargetStructureID": 1724,
      "TargetID": 1724,
      "SourceID": 1,
      "Type": "Conventional",
      "ID": 5
    }, {
      "LinkedStructures": "35928 -> 35930",
      "SourceStructureID": 35894,
      "TargetStructureID": 142,
      "TargetID": 142,
      "SourceID": 35894,
      "Type": "Conventional",
      "ID": 6
    }],
    "edge_attributes": [{
      "DataType": "index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "id",
      "Name": "ID"
    }, {
      "DataType": "source-index",
      "Type": "int",
      "Unique": "false",
      "DisplayName": "source id",
      "Name": "SourceID"
    }, {
      "DataType": "target-index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "target id",
      "Name": "TargetID"
    }, {
      "DataType": "target-index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "target id",
      "Name": "TargetID"
    }, {
      "DataType": "categorical",
      "Type": "string",
      "Unique": "false",
      "DisplayName": "edge type",
      "Name": "Type"
    }, {
      "DataType": "string",
      "Type": "string",
      "Unique": "false",
      "DisplayName": "structures",
      "Name": "LinkedStructures"
    }]
  },
  "matrix": {
    "source_ids": [168, 120, 142, 1724, 5107],
    "matrix": [[[], [], [], [], []],
      [[], [], [], [], [[120, 3, 1, 4, 5107]]],
      [[], [], [], [], []],
      [[], [], [[1724, 1, 35894, 6, 142]], [], []],
      [[], [], [], [], []]],
    "target_ids": [168, 120, 142, 1724, 5107]
  }
};

mock.smallFlightResult = {
  "lengths": {"1": 5, "2": 10, "3": 2},
  "graph": {
    "nodes": [{
      "degree": 424,
      "lon": -83.34883583,
      "state": "MI",
      "lat": 42.21205889,
      "Airport": "DTW",
      "city_name": "Detroit",
      "ID": 17,
      "market": "31295"
    }, {
      "degree": 669,
      "lon": -115.1523333,
      "state": "NV",
      "lat": 36.08036111,
      "Airport": "LAS",
      "city_name": "Las Vegas",
      "ID": 4,
      "market": "32211"
    }, {
      "degree": 236,
      "lon": -122.5975,
      "state": "OR",
      "lat": 45.58872222,
      "Airport": "PDX",
      "city_name": "Portland",
      "ID": 26,
      "market": "34057"
    }, {
      "degree": 1129,
      "lon": -104.6670019,
      "state": "CO",
      "lat": 39.85840806,
      "Airport": "DEN",
      "city_name": "Denver",
      "ID": 27,
      "market": "30325"
    }, {
      "degree": 1095,
      "lon": -118.4080744,
      "state": "CA",
      "lat": 33.94253611,
      "Airport": "LAX",
      "city_name": "Los Angeles",
      "ID": 13,
      "market": "32575"
    }, {
      "degree": 278,
      "lon": -77.45580972,
      "state": "VA",
      "lat": 38.94453194,
      "Airport": "IAD",
      "city_name": "Washington",
      "ID": 186,
      "market": "30852"
    }, {
      "degree": 549,
      "lon": -73.77892556,
      "state": "NY",
      "lat": 40.63975111,
      "Airport": "JFK",
      "city_name": "New York",
      "ID": 170,
      "market": "31703"
    }, {
      "degree": 470,
      "lon": -71.00517917,
      "state": "MA",
      "lat": 42.3643475,
      "Airport": "BOS",
      "city_name": "Boston",
      "ID": 9,
      "market": "30721"
    }, {
      "degree": 272,
      "lon": -157.9224072,
      "state": "HI",
      "lat": 21.31869111,
      "Airport": "HNL",
      "city_name": "Honolulu",
      "ID": 150,
      "market": "32134"
    }, {
      "degree": 836,
      "lon": -122.3748433,
      "state": "CA",
      "lat": 37.61900194,
      "Airport": "SFO",
      "city_name": "San Francisco",
      "ID": 35,
      "market": "32457"
    }],
    "edges": [
      {
        "FlightNum": "0",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 17,
        "Carrier": "DL",
        "TargetID": 9,
        "ID": 10588
      }, {
        "FlightNum": "1",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 17,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 10618
      }, {
        "SourceID": 150,
        "Carrier": "DL",
        "TargetID": 170,
        "ID": 9607,
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653
      }, {
        "SourceID": 13,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 8989,
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 26,
        "Carrier": "UA",
        "TargetID": 186,
        "ID": 1806
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "DL",
        "TargetID": 170,
        "ID": 9349
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 150,
        "Carrier": "HA",
        "TargetID": 170,
        "ID": 12542
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 26,
        "Carrier": "NK",
        "TargetID": 4,
        "ID": 13441
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "UA",
        "TargetID": 186,
        "ID": 6500
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "HA",
        "TargetID": 150,
        "ID": 12565
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 27,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 9053
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "DL",
        "TargetID": 170,
        "ID": 10103
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 27,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 8904
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "AA",
        "TargetID": 13,
        "ID": 8061
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "UA",
        "TargetID": 186,
        "ID": 6482
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 4,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 11013
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 186,
        "Carrier": "B6",
        "TargetID": 9,
        "ID": 11031
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 26,
        "Carrier": "AS",
        "TargetID": 9,
        "ID": 8230
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 13,
        "Carrier": "F9",
        "TargetID": 27,
        "ID": 12519
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 4,
        "Carrier": "NK",
        "TargetID": 17,
        "ID": 13460
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 35,
        "Carrier": "AA",
        "TargetID": 13,
        "ID": 7259
      }, {
        "FlightNum": "288",
        "DepDate": "15-1-1",
        "ArrTime": 1445,
        "DepTime": 653,
        "SourceID": 13,
        "Carrier": "DL",
        "TargetID": 9,
        "ID": 10456
      }],
    "edge_attributes": [{
      "DataType": "index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "id",
      "Name": "ID"
    }, {
      "DataType": "source-index",
      "Type": "int",
      "Unique": "false",
      "DisplayName": "source id",
      "Name": "SourceID"
    }, {
      "DataType": "target-index",
      "Type": "int",
      "Unique": "true",
      "DisplayName": "target id",
      "Name": "TargetID"
    }, {"DataType": "categorical", "Type": "string", "Unique": "false", "DisplayName": "carrier", "Name": "Carrier"}],
    "node_attributes": [{
      "DisplayName": "id",
      "Name": "ID",
      "DataType": "index",
      "DatabaseName": "id",
      "Unique": "true",
      "Type": "int"
    }, {
      "DisplayName": "airport",
      "Name": "Airport",
      "DataType": "id",
      "DatabaseName": "airport",
      "Unique": "true",
      "Type": "string"
    }, {
      "DisplayName": "city",
      "Name": "city_name",
      "DataType": "categorical",
      "DatabaseName": "city_name",
      "Unique": "false",
      "Type": "string"
    }, {
      "DisplayName": "state",
      "Name": "state",
      "DataType": "categorical",
      "DatabaseName": "state",
      "Unique": "false",
      "Type": "string"
    }, {
      "DisplayName": "market",
      "Name": "market",
      "DataType": "categorical",
      "DatabaseName": "market",
      "Unique": "false",
      "Type": "string"
    }, {
      "DisplayName": "degree",
      "Name": "degree",
      "DataType": "quantitative",
      "DatabaseName": "degree",
      "Unique": "false",
      "Type": "int"
    }, {
      "DisplayName": "lat",
      "Name": "lat",
      "DataType": "quantitative",
      "DatabaseName": "lat",
      "Unique": "false",
      "Type": "float"
    }, {
      "DisplayName": "lon",
      "Name": "lon",
      "DataType": "quantitative",
      "DatabaseName": "lon",
      "Unique": "false",
      "Type": "float"
    }]
  },
  "matrix": {
    "source_ids": [13, 35, 26],
    "matrix": [[[[13, 12519, 27, 9053, 9], [13, 12519, 27, 8904, 9], [13, 10456, 9], [13, 8989, 9]], []],

      [[[35, 8061, 13, 10456, 9], [35, 7259, 13, 10456, 9], [35, 6500, 186, 11031, 9], [35, 6482, 186, 11031, 9]], [[35, 10103, 170], [35, 9349, 170], [35, 12565, 150, 12542, 170], [35, 12565, 150, 9607, 170]]],

      [[[26, 8230, 9], [26, 1806, 186, 11031, 9], [26, 13441, 4, 11013, 9], [26, 13441, 4, 13460, 17, 10618, 9], [26, 13441, 4, 13460, 17, 10588, 9]], []]],
    "target_ids": [9, 170]
  }
};

export {mock};
