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

mock.newResult = {
  "graph": {
    "nodes": [{
      "HullArea": 120611000.0,
      "StructureID": 120,
      "Locations": 100,
      "Label": "CBb3m",
      "ID": 120,
      "Structure": "This is a synthetic node!"
    }, {
      "HullArea": 150611000.0,
      "StructureID": 1,
      "Locations": 100,
      "Label": "IAC",
      "ID": 1,
      "Structure": "This is a synthetic node!"
    }, {
      "HullArea": 136599000.0,
      "StructureID": 1724,
      "Locations": 1085,
      "Label": "CBb3m",
      "ID": 1724,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(1724L)"
    }, {
      "HullArea": 102335000.0,
      "StructureID": 35894,
      "Locations": 434,
      "Label": "YAC",
      "ID": 35894,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(35894L)"
    }, {
      "HullArea": 170611000.0,
      "StructureID": 142,
      "Locations": 1438,
      "Label": "GC",
      "ID": 142,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(142L)"
    }, {
      "HullArea": 5281200000.0,
      "StructureID": 5107,
      "Locations": 3299,
      "Label": "GC",
      "ID": 5107,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5107L)"
    }],
    "edges": [{
      "LinkedStructures": "",
      "SourceStructureID": 1,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 1,
      "Type": "Conventional",
      "ID": 4
    }, {
      "LinkedStructures": "",
      "SourceStructureID": 120,
      "TargetStructureID": 1,
      "TargetID": 1,
      "SourceID": 120,
      "Type": "Ribbon Synapse",
      "ID": 3
    }, {
      "LinkedStructures": "",
      "SourceStructureID": 1724,
      "TargetStructureID": 35894,
      "TargetID": 35894,
      "SourceID": 1724,
      "Type": "Ribbon Synapse",
      "ID": 1
    }, {
      "LinkedStructures": "",
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
    }],
    "node_attributes": [{
      "DisplayName": "id",
      "Name": "ID",
      "DataType": "index",
      "DatabaseName": "id",
      "Unique": "true",
      "Type": "int"
    }, {
      "DisplayName": "label",
      "Name": "Label",
      "DataType": "categorical",
      "DatabaseName": "label",
      "Unique": "false",
      "Type": "string"
    }, {
      "DisplayName": "structure uri",
      "Name": "Structure",
      "DataType": "id",
      "DatabaseName": "structure",
      "Unique": "true",
      "Type": "string"
    }, {
      "DisplayName": "structure id",
      "Name": "StructureID",
      "DataType": "id",
      "DatabaseName": "id",
      "Unique": "true",
      "Type": "int"
    }, {
      "DisplayName": "area",
      "Name": "HullArea",
      "DataType": "quantitative",
      "DatabaseName": "hull",
      "Unique": "false",
      "Type": "float"
    }, {
      "DisplayName": "locations",
      "Name": "Locations",
      "DataType": "quantitative",
      "DatabaseName": "locations",
      "Unique": "false",
      "Type": "int"
    }]
  },
  "matrix": {
    "source_ids": [120, 1724],
    "matrix": [[[[120, 3, 1, 1, 4, 5107]], []], [[], [[1724, 1, 35894, 35894, 6, 142]]]],
    "target_ids": [5107, 142]
  }
};

mock.largeResult = {
  "graph": {
    "nodes": [{
      "HullArea": 6695230.0,
      "StructureID": 74047,
      "Locations": 112,
      "Label": "GC",
      "ID": 74047,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(74047L)"
    }, {
      "HullArea": 1791780000.0,
      "StructureID": 29340,
      "Locations": 769,
      "Label": "GC",
      "ID": 29340,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(29340L)"
    }, {
      "HullArea": 166967000.0,
      "StructureID": 408,
      "Locations": 1081,
      "Label": "CBb3n",
      "ID": 408,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(408L)"
    }, {
      "HullArea": 154311000.0,
      "StructureID": 33161,
      "Locations": 186,
      "Label": "GC",
      "ID": 33161,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(33161L)"
    }, {
      "HullArea": 2300110000.0,
      "StructureID": 18693,
      "Locations": 1327,
      "Label": "AC",
      "ID": 18693,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(18693L)"
    }, {
      "HullArea": 228147000.0,
      "StructureID": 909,
      "Locations": 1884,
      "Label": "CBb3",
      "ID": 909,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(909L)"
    }, {
      "HullArea": 3135660000.0,
      "StructureID": 8579,
      "Locations": 1996,
      "Label": "YAC Starburst",
      "ID": 8579,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(8579L)"
    }, {
      "HullArea": 469676000.0,
      "StructureID": 6117,
      "Locations": 1882,
      "Label": "CBb4w",
      "ID": 6117,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6117L)"
    }, {
      "HullArea": 360151000.0,
      "StructureID": 170,
      "Locations": 1784,
      "Label": "CBb4w",
      "ID": 170,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(170L)"
    }, {
      "HullArea": 427868000.0,
      "StructureID": 5650,
      "Locations": 1797,
      "Label": "CBb4w",
      "ID": 5650,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5650L)"
    }, {
      "HullArea": 5017090.0,
      "StructureID": 58642,
      "Locations": 110,
      "Label": "GC",
      "ID": 58642,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(58642L)"
    }, {
      "HullArea": 366047000.0,
      "StructureID": 5562,
      "Locations": 2004,
      "Label": "CBb5",
      "ID": 5562,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5562L)"
    }, {
      "HullArea": 1939020000.0,
      "StructureID": 8580,
      "Locations": 1459,
      "Label": "GC",
      "ID": 8580,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(8580L)"
    }, {
      "HullArea": 1183730000.0,
      "StructureID": 5150,
      "Locations": 574,
      "Label": "GC",
      "ID": 5150,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5150L)"
    }, {
      "HullArea": 132291000.0,
      "StructureID": 5292,
      "Locations": 1162,
      "Label": "CBb4",
      "ID": 5292,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5292L)"
    }, {
      "HullArea": 61763.2,
      "StructureID": 66395,
      "Locations": 5,
      "Label": "AC",
      "ID": 66395,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(66395L)"
    }, {
      "HullArea": 665963000.0,
      "StructureID": 5481,
      "Locations": 987,
      "Label": "YAC ON",
      "ID": 5481,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5481L)"
    }, {
      "HullArea": 534759000.0,
      "StructureID": 5513,
      "Locations": 1319,
      "Label": "CBb4w",
      "ID": 5513,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5513L)"
    }, {
      "HullArea": 127224000.0,
      "StructureID": 6050,
      "Locations": 1615,
      "Label": "CBb3n",
      "ID": 6050,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6050L)"
    }, {
      "HullArea": 331927.0,
      "StructureID": 88565,
      "Locations": 19,
      "Label": "null",
      "ID": 88565,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(88565L)"
    }, {
      "HullArea": 754859000.0,
      "StructureID": 87972,
      "Locations": 463,
      "Label": "GC",
      "ID": 87972,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(87972L)"
    }, {
      "HullArea": 272632000.0,
      "StructureID": 595,
      "Locations": 1541,
      "Label": "CBb4",
      "ID": 595,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(595L)"
    }, {
      "HullArea": 188186000.0,
      "StructureID": 1637,
      "Locations": 1616,
      "Label": "CBb3",
      "ID": 1637,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(1637L)"
    }, {
      "HullArea": 180543000.0,
      "StructureID": 5531,
      "Locations": 1930,
      "Label": "CBb3",
      "ID": 5531,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5531L)"
    }, {
      "HullArea": 649789000.0,
      "StructureID": 906,
      "Locations": 1206,
      "Label": "GAC",
      "ID": 906,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(906L)"
    }, {
      "HullArea": 211721000.0,
      "StructureID": 21299,
      "Locations": 1454,
      "Label": "CBb3",
      "ID": 21299,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(21299L)"
    }, {
      "HullArea": 159039000.0,
      "StructureID": 372,
      "Locations": 1303,
      "Label": "CBb3n",
      "ID": 372,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(372L)"
    }, {
      "HullArea": 125778000.0,
      "StructureID": 28886,
      "Locations": 950,
      "Label": "CBb3n",
      "ID": 28886,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(28886L)"
    }, {
      "HullArea": 5120950000.0,
      "StructureID": 8720,
      "Locations": 2194,
      "Label": "GC",
      "ID": 8720,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(8720L)"
    }, {
      "HullArea": 150126000.0,
      "StructureID": 5517,
      "Locations": 1124,
      "Label": "CBb3n",
      "ID": 5517,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5517L)"
    }, {
      "HullArea": 92616600.0,
      "StructureID": 299,
      "Locations": 630,
      "Label": "CBb3n",
      "ID": 299,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(299L)"
    }, {
      "HullArea": 212385.0,
      "StructureID": 54695,
      "Locations": 23,
      "Label": "GC",
      "ID": 54695,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(54695L)"
    }, {
      "HullArea": 158621000.0,
      "StructureID": 5516,
      "Locations": 1079,
      "Label": "CBb4",
      "ID": 5516,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5516L)"
    }, {
      "HullArea": 2919490000.0,
      "StructureID": 31024,
      "Locations": 1279,
      "Label": "GC ON",
      "ID": 31024,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(31024L)"
    }, {
      "HullArea": 206786000.0,
      "StructureID": 5297,
      "Locations": 1830,
      "Label": "CBb3",
      "ID": 5297,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5297L)"
    }, {
      "HullArea": 285842000.0,
      "StructureID": 479,
      "Locations": 1291,
      "Label": "CBb3",
      "ID": 479,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(479L)"
    }, {
      "HullArea": 281128000.0,
      "StructureID": 6169,
      "Locations": 2193,
      "Label": "GAC Aii",
      "ID": 6169,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6169L)"
    }, {
      "HullArea": 151744000.0,
      "StructureID": 55517,
      "Locations": 865,
      "Label": "AC",
      "ID": 55517,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(55517L)"
    }, {
      "HullArea": 216139000.0,
      "StructureID": 47013,
      "Locations": 334,
      "Label": "GC",
      "ID": 47013,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(47013L)"
    }, {
      "HullArea": 240745000.0,
      "StructureID": 176,
      "Locations": 1465,
      "Label": "CBb3n",
      "ID": 176,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(176L)"
    }, {
      "HullArea": 230370.0,
      "StructureID": 50982,
      "Locations": 16,
      "Label": "GC",
      "ID": 50982,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(50982L)"
    }, {
      "HullArea": 161365000.0,
      "StructureID": 168,
      "Locations": 1335,
      "Label": "CBb3n",
      "ID": 168,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(168L)"
    }, {
      "HullArea": 6150600000.0,
      "StructureID": 16073,
      "Locations": 1670,
      "Label": "YAC",
      "ID": 16073,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(16073L)"
    }, {
      "HullArea": 52728100.0,
      "StructureID": 88260,
      "Locations": 281,
      "Label": "AC",
      "ID": 88260,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(88260L)"
    }, {
      "HullArea": 1463030.0,
      "StructureID": 54701,
      "Locations": 55,
      "Label": "GC",
      "ID": 54701,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(54701L)"
    }, {
      "HullArea": 510680000.0,
      "StructureID": 7073,
      "Locations": 928,
      "Label": "GAC",
      "ID": 7073,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(7073L)"
    }, {
      "HullArea": 644532000.0,
      "StructureID": 3679,
      "Locations": 3386,
      "Label": "GAC Aii",
      "ID": 3679,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(3679L)"
    }, {
      "HullArea": 1452380000.0,
      "StructureID": 6857,
      "Locations": 1241,
      "Label": "GC",
      "ID": 6857,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6857L)"
    }, {
      "HullArea": 474021000.0,
      "StructureID": 5601,
      "Locations": 1839,
      "Label": "CBb4w",
      "ID": 5601,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5601L)"
    }, {
      "HullArea": 604868.0,
      "StructureID": 58741,
      "Locations": 25,
      "Label": "GC",
      "ID": 58741,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(58741L)"
    }, {
      "HullArea": 488826000.0,
      "StructureID": 476,
      "Locations": 2997,
      "Label": "GAC Aii",
      "ID": 476,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(476L)"
    }, {
      "HullArea": 167568000.0,
      "StructureID": 35653,
      "Locations": 334,
      "Label": "AC",
      "ID": 35653,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(35653L)"
    }, {
      "HullArea": 107793000.0,
      "StructureID": 6155,
      "Locations": 1131,
      "Label": "CBb3n",
      "ID": 6155,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6155L)"
    }, {
      "HullArea": 4134160.0,
      "StructureID": 52882,
      "Locations": 47,
      "Label": "GC",
      "ID": 52882,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(52882L)"
    }, {
      "HullArea": 610168000.0,
      "StructureID": 22974,
      "Locations": 555,
      "Label": "GC",
      "ID": 22974,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(22974L)"
    }, {
      "HullArea": 1441100.0,
      "StructureID": 53436,
      "Locations": 26,
      "Label": "GC",
      "ID": 53436,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(53436L)"
    }, {
      "HullArea": 6470240.0,
      "StructureID": 44912,
      "Locations": 62,
      "Label": "AC",
      "ID": 44912,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(44912L)"
    }, {
      "HullArea": 284489000.0,
      "StructureID": 61864,
      "Locations": 491,
      "Label": "GC",
      "ID": 61864,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(61864L)"
    }, {
      "HullArea": 144087000.0,
      "StructureID": 5284,
      "Locations": 1611,
      "Label": "CBb3n",
      "ID": 5284,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5284L)"
    }, {
      "HullArea": 8924300.0,
      "StructureID": 59145,
      "Locations": 116,
      "Label": "GC",
      "ID": 59145,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(59145L)"
    }, {
      "HullArea": 263222000.0,
      "StructureID": 68153,
      "Locations": 483,
      "Label": "GC",
      "ID": 68153,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(68153L)"
    }, {
      "HullArea": 747080000.0,
      "StructureID": 39957,
      "Locations": 632,
      "Label": "YAC",
      "ID": 39957,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(39957L)"
    }, {
      "HullArea": 2073770.0,
      "StructureID": 60264,
      "Locations": 48,
      "Label": "null",
      "ID": 60264,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(60264L)"
    }, {
      "HullArea": 564279000.0,
      "StructureID": 66958,
      "Locations": 833,
      "Label": "GC",
      "ID": 66958,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(66958L)"
    }, {
      "HullArea": 11221300.0,
      "StructureID": 59482,
      "Locations": 118,
      "Label": "AC",
      "ID": 59482,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(59482L)"
    }, {
      "HullArea": 182157000.0,
      "StructureID": 20136,
      "Locations": 1000,
      "Label": "CBb4",
      "ID": 20136,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(20136L)"
    }, {
      "HullArea": 7312460000.0,
      "StructureID": 5118,
      "Locations": 3181,
      "Label": "GC",
      "ID": 5118,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5118L)"
    }, {
      "HullArea": 22107200.0,
      "StructureID": 54078,
      "Locations": 322,
      "Label": "AC",
      "ID": 54078,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(54078L)"
    }, {
      "HullArea": 194562000.0,
      "StructureID": 431,
      "Locations": 1254,
      "Label": "CBb3n",
      "ID": 431,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(431L)"
    }, {
      "HullArea": 263603000.0,
      "StructureID": 28950,
      "Locations": 352,
      "Label": "GC",
      "ID": 28950,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(28950L)"
    }, {
      "HullArea": 6862400000.0,
      "StructureID": 9769,
      "Locations": 2610,
      "Label": "YAC IAC",
      "ID": 9769,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(9769L)"
    }, {
      "HullArea": 248801000.0,
      "StructureID": 440,
      "Locations": 1514,
      "Label": "CBb3",
      "ID": 440,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(440L)"
    }, {
      "HullArea": 257575000.0,
      "StructureID": 327,
      "Locations": 1308,
      "Label": "CBb3",
      "ID": 327,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(327L)"
    }, {
      "HullArea": 419354000.0,
      "StructureID": 5530,
      "Locations": 1630,
      "Label": "CBb4w",
      "ID": 5530,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5530L)"
    }, {
      "HullArea": 9043690.0,
      "StructureID": 70454,
      "Locations": 120,
      "Label": "AC",
      "ID": 70454,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(70454L)"
    }, {
      "HullArea": 3056450.0,
      "StructureID": 68093,
      "Locations": 55,
      "Label": "AC",
      "ID": 68093,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(68093L)"
    }, {
      "HullArea": 188976000.0,
      "StructureID": 26079,
      "Locations": 1059,
      "Label": "CBb4",
      "ID": 26079,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(26079L)"
    }, {
      "HullArea": 300564000.0,
      "StructureID": 3257,
      "Locations": 2190,
      "Label": "GAC Aii",
      "ID": 3257,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(3257L)"
    }, {
      "HullArea": 818484000.0,
      "StructureID": 35975,
      "Locations": 460,
      "Label": "YAC",
      "ID": 35975,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(35975L)"
    }, {
      "HullArea": 229040000.0,
      "StructureID": 23870,
      "Locations": 472,
      "Label": "GC",
      "ID": 23870,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(23870L)"
    }, {
      "HullArea": 546223.0,
      "StructureID": 20327,
      "Locations": 29,
      "Label": "null",
      "ID": 20327,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(20327L)"
    }, {
      "HullArea": 93210000.0,
      "StructureID": 66523,
      "Locations": 391,
      "Label": "AC",
      "ID": 66523,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(66523L)"
    }, {
      "HullArea": 52491400.0,
      "StructureID": 44970,
      "Locations": 165,
      "Label": "GC",
      "ID": 44970,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(44970L)"
    }, {
      "HullArea": 23774700.0,
      "StructureID": 62578,
      "Locations": 172,
      "Label": "GC",
      "ID": 62578,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(62578L)"
    }, {
      "HullArea": 217896000.0,
      "StructureID": 38632,
      "Locations": 337,
      "Label": "AC",
      "ID": 38632,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(38632L)"
    }, {
      "HullArea": 210274000.0,
      "StructureID": 34868,
      "Locations": 587,
      "Label": "YAC",
      "ID": 34868,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(34868L)"
    }, {
      "HullArea": 500271000.0,
      "StructureID": 324,
      "Locations": 1810,
      "Label": "CBb4w",
      "ID": 324,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(324L)"
    }, {
      "HullArea": 4323090000.0,
      "StructureID": 15796,
      "Locations": 3333,
      "Label": "GC",
      "ID": 15796,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(15796L)"
    }, {
      "HullArea": 1139420000.0,
      "StructureID": 5377,
      "Locations": 1215,
      "Label": "YAC OFF",
      "ID": 5377,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5377L)"
    }, {
      "HullArea": 173129000.0,
      "StructureID": 366,
      "Locations": 1308,
      "Label": "CBb3n",
      "ID": 366,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(366L)"
    }, {
      "HullArea": 239362000.0,
      "StructureID": 3116,
      "Locations": 1297,
      "Label": "CBb4",
      "ID": 3116,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(3116L)"
    }, {
      "HullArea": 192980000.0,
      "StructureID": 5279,
      "Locations": 1204,
      "Label": "CBb3n",
      "ID": 5279,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5279L)"
    }, {
      "HullArea": 101493000.0,
      "StructureID": 58592,
      "Locations": 483,
      "Label": "AC",
      "ID": 58592,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(58592L)"
    }, {
      "HullArea": 1333850.0,
      "StructureID": 88055,
      "Locations": 38,
      "Label": "null",
      "ID": 88055,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(88055L)"
    }, {
      "HullArea": 194464000.0,
      "StructureID": 24401,
      "Locations": 1376,
      "Label": "CBb3",
      "ID": 24401,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(24401L)"
    }, {
      "HullArea": 136599000.0,
      "StructureID": 1724,
      "Locations": 1085,
      "Label": "CBb3n",
      "ID": 1724,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(1724L)"
    }, {
      "HullArea": 8471990000.0,
      "StructureID": 606,
      "Locations": 8285,
      "Label": "GC ON",
      "ID": 606,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(606L)"
    }, {
      "HullArea": 348777000.0,
      "StructureID": 6153,
      "Locations": 1853,
      "Label": "GAC Aii",
      "ID": 6153,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(6153L)"
    }, {
      "HullArea": 229283000.0,
      "StructureID": 63594,
      "Locations": 304,
      "Label": "GC",
      "ID": 63594,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(63594L)"
    }, {
      "HullArea": 775708.0,
      "StructureID": 70469,
      "Locations": 8,
      "Label": "AC",
      "ID": 70469,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(70469L)"
    }, {
      "HullArea": 1928080.0,
      "StructureID": 53399,
      "Locations": 31,
      "Label": "GC",
      "ID": 53399,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(53399L)"
    }, {
      "HullArea": 6993740.0,
      "StructureID": 67663,
      "Locations": 117,
      "Label": "GC",
      "ID": 67663,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(67663L)"
    }, {
      "HullArea": 219650000.0,
      "StructureID": 19203,
      "Locations": 1322,
      "Label": "CBb3",
      "ID": 19203,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(19203L)"
    }, {
      "HullArea": 75847800.0,
      "StructureID": 298,
      "Locations": 680,
      "Label": "CBb3",
      "ID": 298,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(298L)"
    }, {
      "HullArea": 127166000.0,
      "StructureID": 277,
      "Locations": 1237,
      "Label": "CBb3n",
      "ID": 277,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(277L)"
    }, {
      "HullArea": 614570000.0,
      "StructureID": 64777,
      "Locations": 670,
      "Label": "GC",
      "ID": 64777,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(64777L)"
    }, {
      "HullArea": 170611000.0,
      "StructureID": 142,
      "Locations": 1438,
      "Label": "CBb3n",
      "ID": 142,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(142L)"
    }, {
      "HullArea": 277653000.0,
      "StructureID": 35240,
      "Locations": 566,
      "Label": "YAC",
      "ID": 35240,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(35240L)"
    }, {
      "HullArea": 919515000.0,
      "StructureID": 46741,
      "Locations": 402,
      "Label": "GC",
      "ID": 46741,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(46741L)"
    }, {
      "HullArea": 311965000.0,
      "StructureID": 428,
      "Locations": 1565,
      "Label": "CBb3",
      "ID": 428,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(428L)"
    }, {
      "HullArea": 36545700.0,
      "StructureID": 61439,
      "Locations": 127,
      "Label": "GC",
      "ID": 61439,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(61439L)"
    }, {
      "HullArea": 413042000.0,
      "StructureID": 7157,
      "Locations": 1976,
      "Label": "GAC Aii",
      "ID": 7157,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(7157L)"
    }, {
      "HullArea": 67864700.0,
      "StructureID": 12408,
      "Locations": 129,
      "Label": "GC",
      "ID": 12408,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(12408L)"
    }, {
      "HullArea": 86223.6,
      "StructureID": 122467,
      "Locations": 1,
      "Label": "GC",
      "ID": 122467,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(122467L)"
    }, {
      "HullArea": 164925000.0,
      "StructureID": 45220,
      "Locations": 299,
      "Label": "AC",
      "ID": 45220,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(45220L)"
    }, {
      "HullArea": 3637500.0,
      "StructureID": 61587,
      "Locations": 42,
      "Label": "null",
      "ID": 61587,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(61587L)"
    }, {
      "HullArea": 163178000.0,
      "StructureID": 5561,
      "Locations": 1239,
      "Label": "CBb3n",
      "ID": 5561,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5561L)"
    }, {
      "HullArea": 168716000.0,
      "StructureID": 4569,
      "Locations": 1447,
      "Label": "CBb3n",
      "ID": 4569,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(4569L)"
    }, {
      "HullArea": 178083.0,
      "StructureID": 86582,
      "Locations": 17,
      "Label": "AC",
      "ID": 86582,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(86582L)"
    }, {
      "HullArea": 285748000.0,
      "StructureID": 61836,
      "Locations": 452,
      "Label": "GC",
      "ID": 61836,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(61836L)"
    }, {
      "HullArea": 270657000.0,
      "StructureID": 4877,
      "Locations": 1295,
      "Label": "CBb4",
      "ID": 4877,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(4877L)"
    }, {
      "HullArea": 871768000.0,
      "StructureID": 514,
      "Locations": 3483,
      "Label": "GAC Aii",
      "ID": 514,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(514L)"
    }, {
      "HullArea": 1876900000.0,
      "StructureID": 9787,
      "Locations": 661,
      "Label": "GC",
      "ID": 9787,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(9787L)"
    }, {
      "HullArea": 682641000.0,
      "StructureID": 5442,
      "Locations": 1276,
      "Label": "YAC",
      "ID": 5442,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5442L)"
    }, {
      "HullArea": 37745700.0,
      "StructureID": 40039,
      "Locations": 279,
      "Label": "AC",
      "ID": 40039,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(40039L)"
    }, {
      "HullArea": 5281200000.0,
      "StructureID": 5107,
      "Locations": 3299,
      "Label": "GC",
      "ID": 5107,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5107L)"
    }, {
      "HullArea": 352320000.0,
      "StructureID": 16087,
      "Locations": 303,
      "Label": "GC",
      "ID": 16087,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(16087L)"
    }, {
      "HullArea": 5479610000.0,
      "StructureID": 7594,
      "Locations": 2393,
      "Label": "GC",
      "ID": 7594,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(7594L)"
    }, {
      "HullArea": 277740.0,
      "StructureID": 59008,
      "Locations": 21,
      "Label": "GC",
      "ID": 59008,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(59008L)"
    }, {
      "HullArea": 1605650000.0,
      "StructureID": 598,
      "Locations": 1315,
      "Label": "YAC",
      "ID": 598,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(598L)"
    }, {
      "HullArea": 2082110000.0,
      "StructureID": 69162,
      "Locations": 879,
      "Label": "GC",
      "ID": 69162,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(69162L)"
    }, {
      "HullArea": 722178000.0,
      "StructureID": 12203,
      "Locations": 735,
      "Label": "GC",
      "ID": 12203,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(12203L)"
    }, {
      "HullArea": 132005000.0,
      "StructureID": 5503,
      "Locations": 1259,
      "Label": "CBb3n",
      "ID": 5503,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5503L)"
    }, {
      "HullArea": 369262000.0,
      "StructureID": 7564,
      "Locations": 1288,
      "Label": "GAC Aii",
      "ID": 7564,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(7564L)"
    }, {
      "HullArea": 209016.0,
      "StructureID": 72879,
      "Locations": 17,
      "Label": "AC",
      "ID": 72879,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(72879L)"
    }, {
      "HullArea": 2753630000.0,
      "StructureID": 68539,
      "Locations": 2485,
      "Label": "GC",
      "ID": 68539,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(68539L)"
    }, {
      "HullArea": 161129000.0,
      "StructureID": 5278,
      "Locations": 1456,
      "Label": "CBb3",
      "ID": 5278,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(5278L)"
    }, {
      "HullArea": 345529000.0,
      "StructureID": 307,
      "Locations": 1216,
      "Label": "CBb4w",
      "ID": 307,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(307L)"
    }, {
      "HullArea": 3381760.0,
      "StructureID": 59499,
      "Locations": 69,
      "Label": "null",
      "ID": 59499,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(59499L)"
    }, {
      "HullArea": 145413000.0,
      "StructureID": 24303,
      "Locations": 803,
      "Label": "CBb4",
      "ID": 24303,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(24303L)"
    }, {
      "HullArea": 546050000.0,
      "StructureID": 4835,
      "Locations": 2069,
      "Label": "GAC Aii",
      "ID": 4835,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(4835L)"
    }, {
      "HullArea": 343737000.0,
      "StructureID": 45574,
      "Locations": 320,
      "Label": "GC",
      "ID": 45574,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(45574L)"
    }, {
      "HullArea": 270823000.0,
      "StructureID": 55403,
      "Locations": 1122,
      "Label": "AC",
      "ID": 55403,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(55403L)"
    }, {
      "HullArea": 446621000.0,
      "StructureID": 2610,
      "Locations": 2993,
      "Label": "GAC Aii",
      "ID": 2610,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(2610L)"
    }, {
      "HullArea": 5705750000.0,
      "StructureID": 8575,
      "Locations": 6138,
      "Label": "GC",
      "ID": 8575,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(8575L)"
    }, {
      "HullArea": 687287000.0,
      "StructureID": 44346,
      "Locations": 628,
      "Label": "GC",
      "ID": 44346,
      "Structure": "http://websvc1.connectomes.utah.edu/RC1/OData/ConnectomeData.svc/Structures(44346L)"
    }],
    "edges": [{
      "LinkedStructures": "    54083 -> 51333    54083 -> 51333",
      "SourceStructureID": 54078,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 54078,
      "Type": "Conventional",
      "ID": 10941
    }, {
      "LinkedStructures": "    45213 -> 10517    53538 -> 53539    53929 -> 53930    54136 -> 54137",
      "SourceStructureID": 5531,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5531,
      "Type": "Ribbon Synapse",
      "ID": 4667
    }, {
      "LinkedStructures": "    47934 -> 47256    74897 -> 74754    82374 -> 75528    47934 -> 47256    74897 -> 74754    82374 -> 75528",
      "SourceStructureID": 170,
      "TargetStructureID": 5530,
      "TargetID": 5530,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 167
    }, {
      "LinkedStructures": "    56692 -> 56693",
      "SourceStructureID": 5442,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 5442,
      "Type": "Gap Junction",
      "ID": 4001
    }, {
      "LinkedStructures": "    43559 -> 43560    96947 -> 96948",
      "SourceStructureID": 324,
      "TargetStructureID": 476,
      "TargetID": 476,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 731
    }, {
      "LinkedStructures": "    92382 -> 49782    92382 -> 49782",
      "SourceStructureID": 5284,
      "TargetStructureID": 142,
      "TargetID": 142,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3686
    }, {
      "LinkedStructures": "    20015 -> 3968    20015 -> 3968    47944 -> 48454    47944 -> 48454    48679 -> 48678    48679 -> 48678",
      "SourceStructureID": 1724,
      "TargetStructureID": 1724,
      "TargetID": 1724,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2777
    }, {
      "LinkedStructures": "    35931 -> 72881",
      "SourceStructureID": 142,
      "TargetStructureID": 72879,
      "TargetID": 72879,
      "SourceID": 142,
      "Type": "Ribbon Synapse",
      "ID": 39
    }, {
      "LinkedStructures": "    27433 -> 97596",
      "SourceStructureID": 5279,
      "TargetStructureID": 66395,
      "TargetID": 66395,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3526
    }, {
      "LinkedStructures": "    55436 -> 55437    55436 -> 55437",
      "SourceStructureID": 55403,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 55403,
      "Type": "Conventional",
      "ID": 11020
    }, {
      "LinkedStructures": "    88567 -> 48508    88567 -> 48508",
      "SourceStructureID": 88565,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 88565,
      "Type": "Gap Junction",
      "ID": 15241
    }, {
      "LinkedStructures": "    1689 -> 62073    30198 -> 62091    62088 -> 62087    62855 -> 62854    1689 -> 62073    62088 -> 62087    30198 -> 62091    62855 -> 62854",
      "SourceStructureID": 1637,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 1637,
      "Type": "Ribbon Synapse",
      "ID": 2760
    }, {
      "LinkedStructures": "    15018 -> 2773",
      "SourceStructureID": 5513,
      "TargetStructureID": 2610,
      "TargetID": 2610,
      "SourceID": 5513,
      "Type": "Gap Junction",
      "ID": 4285
    }, {
      "LinkedStructures": "    49514 -> 49515",
      "SourceStructureID": 5279,
      "TargetStructureID": 20136,
      "TargetID": 20136,
      "SourceID": 5279,
      "Type": "Gap Junction",
      "ID": 3516
    }, {
      "LinkedStructures": "    52881 -> 52914",
      "SourceStructureID": 9769,
      "TargetStructureID": 52882,
      "TargetID": 52882,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8399
    }, {
      "LinkedStructures": "    19306 -> 19282    19306 -> 19282",
      "SourceStructureID": 6050,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 6050,
      "Type": "Ribbon Synapse",
      "ID": 6541
    }, {
      "LinkedStructures": "    49298 -> 49299",
      "SourceStructureID": 5517,
      "TargetStructureID": 26079,
      "TargetID": 26079,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4342
    }, {
      "LinkedStructures": "    30666 -> 30667    30670 -> 30671    47580 -> 47581    30668 -> 98784    30666 -> 30667    30668 -> 98784    30670 -> 30671    47580 -> 47581",
      "SourceStructureID": 5513,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5513,
      "Type": "Ribbon Synapse",
      "ID": 4283
    }, {
      "LinkedStructures": "    83957 -> 83958    83961 -> 83962    83969 -> 83970    83983 -> 83984    86095 -> 86096",
      "SourceStructureID": 6117,
      "TargetStructureID": 20136,
      "TargetID": 20136,
      "SourceID": 6117,
      "Type": "Unknown",
      "ID": 7000
    }, {
      "LinkedStructures": "    53431 -> 53430    53431 -> 53430    121058 -> 121057    121058 -> 121057",
      "SourceStructureID": 5284,
      "TargetStructureID": 5284,
      "TargetID": 5284,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3690
    }, {
      "LinkedStructures": "    29960 -> 53163    29960 -> 53163",
      "SourceStructureID": 9769,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8372
    }, {
      "LinkedStructures": "    55136 -> 55137    55150 -> 55149    56673 -> 56674    56676 -> 56675    66273 -> 66270    66274 -> 66275    74435 -> 74437    74445 -> 74443    55136 -> 55137    55150 -> 55149    56673 -> 56674    56676 -> 56675    66273 -> 66270    66274 -> 66275    74435 -> 74437    74445 -> 74443",
      "SourceStructureID": 5442,
      "TargetStructureID": 23870,
      "TargetID": 23870,
      "SourceID": 5442,
      "Type": "Adherens",
      "ID": 4002
    }, {
      "LinkedStructures": "    93543 -> 93542    94096 -> 94095    93543 -> 93542    94096 -> 94095",
      "SourceStructureID": 324,
      "TargetStructureID": 6153,
      "TargetID": 6153,
      "SourceID": 324,
      "Type": "Unknown",
      "ID": 735
    }, {
      "LinkedStructures": "    6171 -> 1008    92617 -> 3075",
      "SourceStructureID": 5279,
      "TargetStructureID": 514,
      "TargetID": 514,
      "SourceID": 5279,
      "Type": "Gap Junction",
      "ID": 3499
    }, {
      "LinkedStructures": "    48068 -> 15478    48068 -> 15478",
      "SourceStructureID": 24401,
      "TargetStructureID": 22974,
      "TargetID": 22974,
      "SourceID": 24401,
      "Type": "Ribbon Synapse",
      "ID": 9310
    }, {
      "LinkedStructures": "    52387 -> 52388",
      "SourceStructureID": 9769,
      "TargetStructureID": 50982,
      "TargetID": 50982,
      "SourceID": 9769,
      "Type": "Adherens",
      "ID": 8397
    }, {
      "LinkedStructures": "    58557 -> 7627    58557 -> 7627",
      "SourceStructureID": 39957,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 39957,
      "Type": "Conventional",
      "ID": 10396
    }, {
      "LinkedStructures": "    121738 -> 121737",
      "SourceStructureID": 408,
      "TargetStructureID": 479,
      "TargetID": 479,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1006
    }, {
      "LinkedStructures": "    97777 -> 97776    97777 -> 97776",
      "SourceStructureID": 4569,
      "TargetStructureID": 4569,
      "TargetID": 4569,
      "SourceID": 4569,
      "Type": "Adherens",
      "ID": 3053
    }, {
      "LinkedStructures": "    49371 -> 6319",
      "SourceStructureID": 5517,
      "TargetStructureID": 598,
      "TargetID": 598,
      "SourceID": 5517,
      "Type": "Ribbon Synapse",
      "ID": 4328
    }, {
      "LinkedStructures": "    52503 -> 2209    4747 -> 3158    4749 -> 3160    47501 -> 5666    65203 -> 5708    15992 -> 14971",
      "SourceStructureID": 4569,
      "TargetStructureID": 476,
      "TargetID": 476,
      "SourceID": 4569,
      "Type": "Gap Junction",
      "ID": 3049
    }, {
      "LinkedStructures": "    36006 -> 36004    51556 -> 15841    92853 -> 36004    51556 -> 15841    92853 -> 36004    36006 -> 36004",
      "SourceStructureID": 5292,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 5292,
      "Type": "Ribbon Synapse",
      "ID": 3746
    }, {
      "LinkedStructures": "    89559 -> 51538    89560 -> 89561    89559 -> 51538    89560 -> 89561",
      "SourceStructureID": 70454,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 70454,
      "Type": "Conventional",
      "ID": 12831
    }, {
      "LinkedStructures": "    14185 -> 14184",
      "SourceStructureID": 431,
      "TargetStructureID": 327,
      "TargetID": 327,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1105
    }, {
      "LinkedStructures": "    52620 -> 52619    53119 -> 53118",
      "SourceStructureID": 38632,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 38632,
      "Type": "Adherens",
      "ID": 10243
    }, {
      "LinkedStructures": "    18703 -> 18702    23502 -> 23503    49502 -> 49635    96081 -> 96533",
      "SourceStructureID": 5517,
      "TargetStructureID": 18693,
      "TargetID": 18693,
      "SourceID": 5517,
      "Type": "Ribbon Synapse",
      "ID": 4339
    }, {
      "LinkedStructures": "    54132 -> 7607    54154 -> 7612    91349 -> 7630    54132 -> 7607    54154 -> 7612    91349 -> 7630",
      "SourceStructureID": 5601,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5601,
      "Type": "Ribbon Synapse",
      "ID": 5688
    }, {
      "LinkedStructures": "    59054 -> 7539",
      "SourceStructureID": 5279,
      "TargetStructureID": 6857,
      "TargetID": 6857,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3512
    }, {
      "LinkedStructures": "    26011 -> 49132    26065 -> 52764    52847 -> 52829    26019 -> 52851",
      "SourceStructureID": 277,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 277,
      "Type": "Ribbon Synapse",
      "ID": 600
    }, {
      "LinkedStructures": "    44440 -> 87978    44440 -> 87978",
      "SourceStructureID": 21299,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 21299,
      "Type": "Ribbon Synapse",
      "ID": 9209
    }, {
      "LinkedStructures": "    69163 -> 69131    69164 -> 69132",
      "SourceStructureID": 69162,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 69162,
      "Type": "Adherens",
      "ID": 12677
    }, {
      "LinkedStructures": "    91900 -> 45228    91900 -> 45228",
      "SourceStructureID": 176,
      "TargetStructureID": 45220,
      "TargetID": 45220,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 351
    }, {
      "LinkedStructures": "    62069 -> 62068    93411 -> 93412    104822 -> 62259    62069 -> 62068    104822 -> 62259    93411 -> 93412",
      "SourceStructureID": 5278,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 5278,
      "Type": "BC Conventional Synapse",
      "ID": 3286
    }, {
      "LinkedStructures": "    4210 -> 14931    4172 -> 14932    34080 -> 34081    39016 -> 39015    39084 -> 39085    49161 -> 49162    4334 -> 92504    92505 -> 92506    92537 -> 92538    92746 -> 92747    92792 -> 92791    119580 -> 119579",
      "SourceStructureID": 168,
      "TargetStructureID": 3257,
      "TargetID": 3257,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 125
    }, {
      "LinkedStructures": "    71880 -> 71879    122296 -> 122290",
      "SourceStructureID": 372,
      "TargetStructureID": 366,
      "TargetID": 366,
      "SourceID": 372,
      "Type": "Gap Junction",
      "ID": 934
    }, {
      "LinkedStructures": "    53215 -> 53216    50896 -> 53313",
      "SourceStructureID": 428,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 428,
      "Type": "Ribbon Synapse",
      "ID": 1090
    }, {
      "LinkedStructures": "    25105 -> 25103    96065 -> 25115",
      "SourceStructureID": 5517,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5517,
      "Type": "Ribbon Synapse",
      "ID": 4337
    }, {
      "LinkedStructures": "    44448 -> 87983    87994 -> 87992    44448 -> 87983    87994 -> 87992",
      "SourceStructureID": 142,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 142,
      "Type": "Ribbon Synapse",
      "ID": 41
    }, {
      "LinkedStructures": "    51298 -> 7678    51298 -> 7678",
      "SourceStructureID": 28886,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 28886,
      "Type": "Ribbon Synapse",
      "ID": 9432
    }, {
      "LinkedStructures": "    30978 -> 8404    30983 -> 13785    46909 -> 55341    115631 -> 8405    122327 -> 8403    122327 -> 8403    30978 -> 8404    115631 -> 8405    30983 -> 13785    46909 -> 55341",
      "SourceStructureID": 372,
      "TargetStructureID": 6153,
      "TargetID": 6153,
      "SourceID": 372,
      "Type": "Gap Junction",
      "ID": 941
    }, {
      "LinkedStructures": "    83287 -> 83286    83287 -> 83286",
      "SourceStructureID": 5279,
      "TargetStructureID": 6117,
      "TargetID": 6117,
      "SourceID": 5279,
      "Type": "Unknown",
      "ID": 3510
    }, {
      "LinkedStructures": "    89208 -> 89209    89208 -> 89209",
      "SourceStructureID": 170,
      "TargetStructureID": 7564,
      "TargetID": 7564,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 168
    }, {
      "LinkedStructures": "    35248 -> 7596    35255 -> 25092    38258 -> 38259    38262 -> 38263    38265 -> 38266    35248 -> 7596    35255 -> 25092    38258 -> 38259    38262 -> 38263    38265 -> 38266",
      "SourceStructureID": 35240,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 35240,
      "Type": "Conventional",
      "ID": 9987
    }, {
      "LinkedStructures": "    29136 -> 53400",
      "SourceStructureID": 20136,
      "TargetStructureID": 53399,
      "TargetID": 53399,
      "SourceID": 20136,
      "Type": "Ribbon Synapse",
      "ID": 8982
    }, {
      "LinkedStructures": "    12773 -> 8381    12796 -> 8382    12740 -> 8387    12633 -> 12634    12759 -> 12760    122816 -> 122815",
      "SourceStructureID": 431,
      "TargetStructureID": 4835,
      "TargetID": 4835,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1109
    }, {
      "LinkedStructures": "    119045 -> 119046    119056 -> 119057    119045 -> 119046    119056 -> 119057",
      "SourceStructureID": 168,
      "TargetStructureID": 4569,
      "TargetID": 4569,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 126
    }, {
      "LinkedStructures": "    33392 -> 44455    44453 -> 44452",
      "SourceStructureID": 4877,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 4877,
      "Type": "Ribbon Synapse",
      "ID": 3211
    }, {
      "LinkedStructures": "    29813 -> 29816    29813 -> 29816",
      "SourceStructureID": 26079,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 26079,
      "Type": "Ribbon Synapse",
      "ID": 9410
    }, {
      "LinkedStructures": "    67515 -> 67514    67515 -> 67514",
      "SourceStructureID": 5107,
      "TargetStructureID": 61836,
      "TargetID": 61836,
      "SourceID": 5107,
      "Type": "Adherens",
      "ID": 3264
    }, {
      "LinkedStructures": "    25123 -> 25122    29590 -> 64855    29603 -> 64853    29604 -> 64854    118216 -> 25118    118216 -> 25118    25123 -> 25122    29603 -> 64853    29604 -> 64854    29590 -> 64855",
      "SourceStructureID": 5513,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5513,
      "Type": "Ribbon Synapse",
      "ID": 4288
    }, {
      "LinkedStructures": "    113846 -> 62359",
      "SourceStructureID": 5531,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 5531,
      "Type": "Ribbon Synapse",
      "ID": 4680
    }, {
      "LinkedStructures": "    27433 -> 20151",
      "SourceStructureID": 5279,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3515
    }, {
      "LinkedStructures": "    51530 -> 84654",
      "SourceStructureID": 6117,
      "TargetStructureID": 59482,
      "TargetID": 59482,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7030
    }, {
      "LinkedStructures": "    13645 -> 49154",
      "SourceStructureID": 366,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 366,
      "Type": "Ribbon Synapse",
      "ID": 917
    }, {
      "LinkedStructures": "    68575 -> 68574    68580 -> 68581    68575 -> 68574    68580 -> 68581",
      "SourceStructureID": 5297,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 5297,
      "Type": "Ribbon Synapse",
      "ID": 3802
    }, {
      "LinkedStructures": "    75924 -> 75923    75924 -> 75923",
      "SourceStructureID": 66523,
      "TargetStructureID": 22974,
      "TargetID": 22974,
      "SourceID": 66523,
      "Type": "Conventional",
      "ID": 12048
    }, {
      "LinkedStructures": "    92051 -> 92050    92051 -> 92050",
      "SourceStructureID": 142,
      "TargetStructureID": 5292,
      "TargetID": 5292,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 27
    }, {
      "LinkedStructures": "    99327 -> 99328    116751 -> 116750    116753 -> 116752",
      "SourceStructureID": 1724,
      "TargetStructureID": 1637,
      "TargetID": 1637,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2776
    }, {
      "LinkedStructures": "    15973 -> 15903    15973 -> 15903",
      "SourceStructureID": 307,
      "TargetStructureID": 906,
      "TargetID": 906,
      "SourceID": 307,
      "Type": "Ribbon Synapse",
      "ID": 672
    }, {
      "LinkedStructures": "    50954 -> 50955    81947 -> 81948    91135 -> 91136    91752 -> 91753    92821 -> 92822    50954 -> 50955    81947 -> 81948    91135 -> 91136    91752 -> 91753    92821 -> 92822",
      "SourceStructureID": 168,
      "TargetStructureID": 595,
      "TargetID": 595,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 121
    }, {
      "LinkedStructures": "    60117 -> 60056",
      "SourceStructureID": 6117,
      "TargetStructureID": 5601,
      "TargetID": 5601,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6992
    }, {
      "LinkedStructures": "    94455 -> 122343    94455 -> 122343",
      "SourceStructureID": 324,
      "TargetStructureID": 372,
      "TargetID": 372,
      "SourceID": 324,
      "Type": "Unknown",
      "ID": 729
    }, {
      "LinkedStructures": "    88342 -> 88341    89747 -> 89748    88342 -> 88341    89747 -> 89748",
      "SourceStructureID": 170,
      "TargetStructureID": 595,
      "TargetID": 595,
      "SourceID": 170,
      "Type": "Adherens",
      "ID": 162
    }, {
      "LinkedStructures": "    90194 -> 90193",
      "SourceStructureID": 476,
      "TargetStructureID": 46741,
      "TargetID": 46741,
      "SourceID": 476,
      "Type": "Touch",
      "ID": 1261
    }, {
      "LinkedStructures": "    120313 -> 120314",
      "SourceStructureID": 5531,
      "TargetStructureID": 5118,
      "TargetID": 5118,
      "SourceID": 5531,
      "Type": "BC Conventional Synapse",
      "ID": 4668
    }, {
      "LinkedStructures": "    88245 -> 47583",
      "SourceStructureID": 47013,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 47013,
      "Type": "Gap Junction",
      "ID": 10780
    }, {
      "LinkedStructures": "    72104 -> 72103    72104 -> 72103    72106 -> 72107    72106 -> 72107",
      "SourceStructureID": 8579,
      "TargetStructureID": 8580,
      "TargetID": 8580,
      "SourceID": 8579,
      "Type": "Gap Junction",
      "ID": 8270
    }, {
      "LinkedStructures": "    92879 -> 92878    92888 -> 57071    92888 -> 57071    92879 -> 92878",
      "SourceStructureID": 5284,
      "TargetStructureID": 6050,
      "TargetID": 6050,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3696
    }, {
      "LinkedStructures": "    3144 -> 19369    3144 -> 19369",
      "SourceStructureID": 3116,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 3116,
      "Type": "Ribbon Synapse",
      "ID": 2916
    }, {
      "LinkedStructures": "    51547 -> 84389    70299 -> 70300    70301 -> 70411    70299 -> 70300    70301 -> 70411    51547 -> 84389",
      "SourceStructureID": 5292,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 5292,
      "Type": "Ribbon Synapse",
      "ID": 3756
    }, {
      "LinkedStructures": "    4092 -> 101770",
      "SourceStructureID": 1724,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 1724,
      "Type": "Ribbon Synapse",
      "ID": 2783
    }, {
      "LinkedStructures": "    20149 -> 15845    69861 -> 20117    97845 -> 97844    45995 -> 108492    20149 -> 15845    45995 -> 108492    69861 -> 20117    97845 -> 97844",
      "SourceStructureID": 20136,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 20136,
      "Type": "Ribbon Synapse",
      "ID": 8976
    }, {
      "LinkedStructures": "    49262 -> 49249    49262 -> 49249",
      "SourceStructureID": 5279,
      "TargetStructureID": 5279,
      "TargetID": 5279,
      "SourceID": 5279,
      "Type": "Adherens",
      "ID": 3505
    }, {
      "LinkedStructures": "    33385 -> 58647",
      "SourceStructureID": 4877,
      "TargetStructureID": 58642,
      "TargetID": 58642,
      "SourceID": 4877,
      "Type": "Ribbon Synapse",
      "ID": 3217
    }, {
      "LinkedStructures": "    63011 -> 21646    32262 -> 21646    48107 -> 38618    34802 -> 61561    62383 -> 62382    64348 -> 64347    32262 -> 21646    34802 -> 61561    48107 -> 38618    62383 -> 62382    63011 -> 21646    64348 -> 64347",
      "SourceStructureID": 24401,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 24401,
      "Type": "BC Conventional Synapse",
      "ID": 9306
    }, {
      "LinkedStructures": "    88264 -> 47749",
      "SourceStructureID": 88260,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 88260,
      "Type": "Gap Junction",
      "ID": 15201
    }, {
      "LinkedStructures": "    63141 -> 43265    104922 -> 62850    63141 -> 43265    104922 -> 62850",
      "SourceStructureID": 8720,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 8720,
      "Type": "Conventional",
      "ID": 8293
    }, {
      "LinkedStructures": "    70147 -> 70148    70147 -> 70148",
      "SourceStructureID": 68153,
      "TargetStructureID": 66958,
      "TargetID": 66958,
      "SourceID": 68153,
      "Type": "Adherens",
      "ID": 12448
    }, {
      "LinkedStructures": "    69787 -> 69788    69787 -> 69788",
      "SourceStructureID": 61836,
      "TargetStructureID": 45574,
      "TargetID": 45574,
      "SourceID": 61836,
      "Type": "Adherens",
      "ID": 11498
    }, {
      "LinkedStructures": "    32640 -> 32639    83334 -> 83185    32640 -> 32639    83334 -> 83185",
      "SourceStructureID": 324,
      "TargetStructureID": 307,
      "TargetID": 307,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 725
    }, {
      "LinkedStructures": "    23807 -> 23821    23807 -> 23821    23827 -> 23828    23827 -> 23828    46762 -> 46761    46762 -> 46761    52504 -> 52505    52504 -> 52505    52538 -> 52540    52538 -> 52540",
      "SourceStructureID": 4569,
      "TargetStructureID": 3116,
      "TargetID": 3116,
      "SourceID": 4569,
      "Type": "Gap Junction",
      "ID": 3051
    }, {
      "LinkedStructures": "    12676 -> 60299    38595 -> 18613    60324 -> 60325    122852 -> 122853    122869 -> 122870",
      "SourceStructureID": 431,
      "TargetStructureID": 440,
      "TargetID": 440,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1108
    }, {
      "LinkedStructures": "    12703 -> 12704    12709 -> 12710    12703 -> 12704    12709 -> 12710",
      "SourceStructureID": 431,
      "TargetStructureID": 7157,
      "TargetID": 7157,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1110
    }, {
      "LinkedStructures": "    4122 -> 1009    47377 -> 1442    47345 -> 1447    47401 -> 3072    22606 -> 3242    48675 -> 48674",
      "SourceStructureID": 1724,
      "TargetStructureID": 514,
      "TargetID": 514,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2775
    }, {
      "LinkedStructures": "    115544 -> 115543",
      "SourceStructureID": 431,
      "TargetStructureID": 277,
      "TargetID": 277,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1104
    }, {
      "LinkedStructures": "    92463 -> 92462    92463 -> 92462",
      "SourceStructureID": 142,
      "TargetStructureID": 142,
      "TargetID": 142,
      "SourceID": 142,
      "Type": "Unknown",
      "ID": 23
    }, {
      "LinkedStructures": "    55554 -> 52850    55519 -> 53305    55518 -> 53308    55518 -> 53308    55519 -> 53305    55554 -> 52850",
      "SourceStructureID": 55517,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 55517,
      "Type": "Conventional",
      "ID": 11030
    }, {
      "LinkedStructures": "    11822 -> 5239    11822 -> 19802",
      "SourceStructureID": 7073,
      "TargetStructureID": 5150,
      "TargetID": 5150,
      "SourceID": 7073,
      "Type": "Conventional",
      "ID": 7939
    }, {
      "LinkedStructures": "    46301 -> 53402",
      "SourceStructureID": 5561,
      "TargetStructureID": 53399,
      "TargetID": 53399,
      "SourceID": 5561,
      "Type": "Ribbon Synapse",
      "ID": 4978
    }, {
      "LinkedStructures": "    45918 -> 69214",
      "SourceStructureID": 909,
      "TargetStructureID": 69162,
      "TargetID": 69162,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2596
    }, {
      "LinkedStructures": "    70470 -> 10543    70470 -> 10543",
      "SourceStructureID": 70469,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 70469,
      "Type": "Conventional",
      "ID": 12843
    }, {
      "LinkedStructures": "    38804 -> 38803    38804 -> 38803",
      "SourceStructureID": 408,
      "TargetStructureID": 598,
      "TargetID": 598,
      "SourceID": 408,
      "Type": "Ribbon Synapse",
      "ID": 1007
    }, {
      "LinkedStructures": "    25107 -> 25106    29141 -> 29142    25107 -> 25106    29141 -> 29142",
      "SourceStructureID": 20136,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 20136,
      "Type": "Ribbon Synapse",
      "ID": 8974
    }, {
      "LinkedStructures": "    21306 -> 62297    21305 -> 62298    62322 -> 62321    21305 -> 62298    21306 -> 62297    62322 -> 62321",
      "SourceStructureID": 21299,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 21299,
      "Type": "Ribbon Synapse",
      "ID": 9198
    }, {
      "LinkedStructures": "    109786 -> 109787",
      "SourceStructureID": 5517,
      "TargetStructureID": 20136,
      "TargetID": 20136,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4341
    }, {
      "LinkedStructures": "    122397 -> 122396",
      "SourceStructureID": 408,
      "TargetStructureID": 24303,
      "TargetID": 24303,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1009
    }, {
      "LinkedStructures": "    83178 -> 46568    89673 -> 89674    90264 -> 90263    90405 -> 90406    90434 -> 90433    92502 -> 92501    83178 -> 46568    89673 -> 89674    90264 -> 90263    90405 -> 90406    90434 -> 90433    92502 -> 92501",
      "SourceStructureID": 170,
      "TargetStructureID": 3116,
      "TargetID": 3116,
      "SourceID": 170,
      "Type": "Adherens",
      "ID": 164
    }, {
      "LinkedStructures": "    92767 -> 92766",
      "SourceStructureID": 168,
      "TargetStructureID": 4835,
      "TargetID": 4835,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 127
    }, {
      "LinkedStructures": "    33028 -> 33027",
      "SourceStructureID": 142,
      "TargetStructureID": 3679,
      "TargetID": 3679,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 25
    }, {
      "LinkedStructures": "    112565 -> 112564    112565 -> 112564",
      "SourceStructureID": 5284,
      "TargetStructureID": 7073,
      "TargetID": 7073,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3697
    }, {
      "LinkedStructures": "    23037 -> 23036",
      "SourceStructureID": 327,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 327,
      "Type": "Ribbon Synapse",
      "ID": 791
    }, {
      "LinkedStructures": "    59087 -> 59084    86222 -> 86223    92385 -> 92386    92385 -> 92386    59087 -> 59084    86222 -> 86223",
      "SourceStructureID": 6117,
      "TargetStructureID": 6169,
      "TargetID": 6169,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6994
    }, {
      "LinkedStructures": "    30883 -> 84246",
      "SourceStructureID": 6117,
      "TargetStructureID": 54078,
      "TargetID": 54078,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7013
    }, {
      "LinkedStructures": "    97111 -> 97110    115910 -> 115909",
      "SourceStructureID": 5279,
      "TargetStructureID": 909,
      "TargetID": 909,
      "SourceID": 5279,
      "Type": "Unknown",
      "ID": 3500
    }, {
      "LinkedStructures": "    53398 -> 53401",
      "SourceStructureID": 9769,
      "TargetStructureID": 53399,
      "TargetID": 53399,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8410
    }, {
      "LinkedStructures": "    92532 -> 92533    92532 -> 92533",
      "SourceStructureID": 168,
      "TargetStructureID": 3116,
      "TargetID": 3116,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 124
    }, {
      "LinkedStructures": "    1306 -> 89715    89214 -> 1354    89214 -> 1354    1306 -> 89715    90300 -> 90301    90300 -> 90301    90321 -> 90320    90321 -> 90320    90611 -> 90612    90611 -> 90612    92484 -> 92486    92484 -> 92486    92499 -> 92500    92499 -> 92500",
      "SourceStructureID": 170,
      "TargetStructureID": 170,
      "TargetID": 170,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 157
    }, {
      "LinkedStructures": "    88056 -> 44443    88056 -> 44443",
      "SourceStructureID": 88055,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 88055,
      "Type": "Conventional",
      "ID": 15177
    }, {
      "LinkedStructures": "    20252 -> 20253    46263 -> 51599    20252 -> 20253    46263 -> 51599",
      "SourceStructureID": 5561,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5561,
      "Type": "Ribbon Synapse",
      "ID": 4966
    }, {
      "LinkedStructures": "    7218 -> 55355    7218 -> 55355",
      "SourceStructureID": 299,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 299,
      "Type": "Ribbon Synapse",
      "ID": 658
    }, {
      "LinkedStructures": "    50909 -> 50908    50909 -> 50908",
      "SourceStructureID": 598,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 598,
      "Type": "Gap Junction",
      "ID": 2488
    }, {
      "LinkedStructures": "    4738 -> 64724    4738 -> 64724",
      "SourceStructureID": 4569,
      "TargetStructureID": 18693,
      "TargetID": 18693,
      "SourceID": 4569,
      "Type": "Ribbon Synapse",
      "ID": 3056
    }, {
      "LinkedStructures": "    86347 -> 47259    86348 -> 47258",
      "SourceStructureID": 6117,
      "TargetStructureID": 595,
      "TargetID": 595,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6983
    }, {
      "LinkedStructures": "    44448 -> 44445    87994 -> 44449    87995 -> 87990    87995 -> 44449    87996 -> 87998    119585 -> 44444",
      "SourceStructureID": 142,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 142,
      "Type": "Ribbon Synapse",
      "ID": 38
    }, {
      "LinkedStructures": "    82014 -> 82015    92894 -> 92896    82014 -> 82015    92894 -> 92896",
      "SourceStructureID": 168,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 168,
      "Type": "Unknown",
      "ID": 132
    }, {
      "LinkedStructures": "    44415 -> 44413    44426 -> 44425",
      "SourceStructureID": 168,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 168,
      "Type": "Ribbon Synapse",
      "ID": 136
    }, {
      "LinkedStructures": "    12399 -> 12323    12396 -> 12348    12397 -> 12398    25889 -> 25890    42521 -> 42520    44269 -> 44268    52759 -> 49023    53004 -> 49179    49183 -> 49182    50695 -> 50694    50919 -> 50971    51208 -> 51207    51257 -> 51258    51275 -> 51274    51303 -> 51302    51307 -> 51306    51330 -> 51329    51592 -> 51591    51595 -> 51594    51863 -> 51864    51866 -> 51865    53049 -> 53044    53048 -> 53045    53047 -> 53046    53051 -> 53050    53076 -> 53075    53079 -> 53078    53088 -> 53089    53511 -> 53510    53533 -> 53530    12396 -> 12348    12397 -> 12398    12399 -> 12323    25889 -> 25890    42521 -> 42520    44269 -> 44268    49183 -> 49182    50695 -> 50694    50919 -> 50971    51208 -> 51207    51257 -> 51258    51275 -> 51274    51303 -> 51302    51307 -> 51306    51330 -> 51329    51592 -> 51591    51595 -> 51594    51863 -> 51864    51866 -> 51865    52759 -> 49023    53004 -> 49179    53047 -> 53046    53048 -> 53045    53049 -> 53044    53051 -> 53050    53076 -> 53075    53079 -> 53078    53088 -> 53089    53511 -> 53510    53533 -> 53530",
      "SourceStructureID": 9769,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 9769,
      "Type": "Gap Junction",
      "ID": 8371
    }, {
      "LinkedStructures": "    107172 -> 107168",
      "SourceStructureID": 5531,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 5531,
      "Type": "Unknown",
      "ID": 4681
    }, {
      "LinkedStructures": "    22877 -> 21731    22942 -> 21733    62431 -> 61549    63610 -> 62102    62108 -> 62105    22877 -> 21731    22942 -> 21733    62108 -> 62105    62431 -> 61549    63610 -> 62102",
      "SourceStructureID": 19203,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 19203,
      "Type": "Ribbon Synapse",
      "ID": 8942
    }, {
      "LinkedStructures": "    23795 -> 48486    92842 -> 92843    23795 -> 48486    92842 -> 92843",
      "SourceStructureID": 4569,
      "TargetStructureID": 21299,
      "TargetID": 21299,
      "SourceID": 4569,
      "Type": "Gap Junction",
      "ID": 3058
    }, {
      "LinkedStructures": "    38596 -> 38597    52576 -> 48787    38596 -> 38597    52576 -> 48787",
      "SourceStructureID": 34868,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 34868,
      "Type": "Conventional",
      "ID": 9910
    }, {
      "LinkedStructures": "    55066 -> 122362    55066 -> 122362",
      "SourceStructureID": 372,
      "TargetStructureID": 3116,
      "TargetID": 3116,
      "SourceID": 372,
      "Type": "Gap Junction",
      "ID": 940
    }, {
      "LinkedStructures": "    53360 -> 53359    53365 -> 53364    53419 -> 53420",
      "SourceStructureID": 5481,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5481,
      "Type": "Gap Junction",
      "ID": 4065
    }, {
      "LinkedStructures": "    53261 -> 55525    53301 -> 55520    122115 -> 122114    53301 -> 55520    53261 -> 55525    122115 -> 122114",
      "SourceStructureID": 324,
      "TargetStructureID": 55517,
      "TargetID": 55517,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 744
    }, {
      "LinkedStructures": "    49239 -> 47143    49241 -> 49242    92667 -> 9470    92667 -> 9470    49239 -> 47143    49241 -> 49242",
      "SourceStructureID": 5279,
      "TargetStructureID": 6169,
      "TargetID": 6169,
      "SourceID": 5279,
      "Type": "Gap Junction",
      "ID": 3511
    }, {
      "LinkedStructures": "    113675 -> 62583    117275 -> 117281    117654 -> 117655    118407 -> 118416    120169 -> 120168",
      "SourceStructureID": 909,
      "TargetStructureID": 62578,
      "TargetID": 62578,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2590
    }, {
      "LinkedStructures": "    23971 -> 54705",
      "SourceStructureID": 9769,
      "TargetStructureID": 54701,
      "TargetID": 54701,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8423
    }, {
      "LinkedStructures": "    15172 -> 122468",
      "SourceStructureID": 906,
      "TargetStructureID": 122467,
      "TargetID": 122467,
      "SourceID": 906,
      "Type": "Conventional",
      "ID": 2559
    }, {
      "LinkedStructures": "    9175 -> 12067    18069 -> 18061",
      "SourceStructureID": 3257,
      "TargetStructureID": 9787,
      "TargetID": 9787,
      "SourceID": 3257,
      "Type": "Conventional",
      "ID": 2939
    }, {
      "LinkedStructures": "    60118 -> 23474    106295 -> 106293",
      "SourceStructureID": 6117,
      "TargetStructureID": 5650,
      "TargetID": 5650,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6993
    }, {
      "LinkedStructures": "    30881 -> 7955    30881 -> 7955    83947 -> 83946    83947 -> 83946    92384 -> 92383    92384 -> 92383",
      "SourceStructureID": 6117,
      "TargetStructureID": 3679,
      "TargetID": 3679,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6986
    }, {
      "LinkedStructures": "    47507 -> 50891    47507 -> 50891    53319 -> 53320    53319 -> 53320",
      "SourceStructureID": 4569,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 4569,
      "Type": "Ribbon Synapse",
      "ID": 3050
    }, {
      "LinkedStructures": "    114744 -> 44818    114744 -> 44818",
      "SourceStructureID": 5531,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 5531,
      "Type": "Ribbon Synapse",
      "ID": 4683
    }, {
      "LinkedStructures": "    53671 -> 62270    93339 -> 93340    93388 -> 93391    98134 -> 62823    98257 -> 62817    53671 -> 62270    98257 -> 62817    98134 -> 62823    93339 -> 93340    93388 -> 93391",
      "SourceStructureID": 5297,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 5297,
      "Type": "Ribbon Synapse",
      "ID": 3789
    }, {
      "LinkedStructures": "    87024 -> 52227    87024 -> 52227",
      "SourceStructureID": 5377,
      "TargetStructureID": 5118,
      "TargetID": 5118,
      "SourceID": 5377,
      "Type": "Conventional",
      "ID": 3889
    }, {
      "LinkedStructures": "    43318 -> 43317    43318 -> 43317",
      "SourceStructureID": 170,
      "TargetStructureID": 324,
      "TargetID": 324,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 158
    }, {
      "LinkedStructures": "    51345 -> 51346    85438 -> 85439    91581 -> 91580",
      "SourceStructureID": 6117,
      "TargetStructureID": 5292,
      "TargetID": 5292,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6989
    }, {
      "LinkedStructures": "    54341 -> 56698",
      "SourceStructureID": 5284,
      "TargetStructureID": 5442,
      "TargetID": 5442,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3693
    }, {
      "LinkedStructures": "    55181 -> 54037    55181 -> 54037",
      "SourceStructureID": 45220,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 45220,
      "Type": "Gap Junction",
      "ID": 10637
    }, {
      "LinkedStructures": "    61564 -> 61563    122370 -> 122369",
      "SourceStructureID": 479,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 479,
      "Type": "BC Conventional Synapse",
      "ID": 1280
    }, {
      "LinkedStructures": "    84198 -> 89562",
      "SourceStructureID": 6117,
      "TargetStructureID": 70454,
      "TargetID": 70454,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7035
    }, {
      "LinkedStructures": "    35999 -> 36001    35999 -> 36001",
      "SourceStructureID": 35975,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 35975,
      "Type": "Conventional",
      "ID": 10121
    }, {
      "LinkedStructures": "    47022 -> 47021    47034 -> 47031    47035 -> 47033    47044 -> 47041",
      "SourceStructureID": 26079,
      "TargetStructureID": 47013,
      "TargetID": 47013,
      "SourceID": 26079,
      "Type": "Ribbon Synapse",
      "ID": 9414
    }, {
      "LinkedStructures": "    11844 -> 29394    11844 -> 29394",
      "SourceStructureID": 7073,
      "TargetStructureID": 29340,
      "TargetID": 29340,
      "SourceID": 7073,
      "Type": "Conventional",
      "ID": 7942
    }, {
      "LinkedStructures": "    38780 -> 38779",
      "SourceStructureID": 24303,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 24303,
      "Type": "Ribbon Synapse",
      "ID": 9291
    }, {
      "LinkedStructures": "    58811 -> 59010",
      "SourceStructureID": 6117,
      "TargetStructureID": 59008,
      "TargetID": 59008,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7029
    }, {
      "LinkedStructures": "    55601 -> 117794    55601 -> 117794",
      "SourceStructureID": 909,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2574
    }, {
      "LinkedStructures": "    71860 -> 71859    122320 -> 122319",
      "SourceStructureID": 372,
      "TargetStructureID": 479,
      "TargetID": 479,
      "SourceID": 372,
      "Type": "Gap Junction",
      "ID": 938
    }, {
      "LinkedStructures": "    68174 -> 68173    68174 -> 68173",
      "SourceStructureID": 68093,
      "TargetStructureID": 68153,
      "TargetID": 68153,
      "SourceID": 68093,
      "Type": "Adherens",
      "ID": 12440
    }, {
      "LinkedStructures": "    121669 -> 121668    122482 -> 122481",
      "SourceStructureID": 307,
      "TargetStructureID": 24303,
      "TargetID": 24303,
      "SourceID": 307,
      "Type": "Gap Junction",
      "ID": 676
    }, {
      "LinkedStructures": "    46288 -> 63604    49639 -> 96820",
      "SourceStructureID": 5561,
      "TargetStructureID": 63594,
      "TargetID": 63594,
      "SourceID": 5561,
      "Type": "Ribbon Synapse",
      "ID": 4979
    }, {
      "LinkedStructures": "    23710 -> 23713    30366 -> 30368    23710 -> 23713    30366 -> 30368",
      "SourceStructureID": 1637,
      "TargetStructureID": 22974,
      "TargetID": 22974,
      "SourceID": 1637,
      "Type": "Ribbon Synapse",
      "ID": 2764
    }, {
      "LinkedStructures": "    5856 -> 44975    45005 -> 45004",
      "SourceStructureID": 176,
      "TargetStructureID": 44970,
      "TargetID": 44970,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 350
    }, {
      "LinkedStructures": "    43706 -> 43691    43706 -> 43691    53427 -> 53428    53427 -> 53428    113584 -> 113585    113584 -> 113585",
      "SourceStructureID": 5284,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3689
    }, {
      "LinkedStructures": "    50113 -> 96581",
      "SourceStructureID": 5516,
      "TargetStructureID": 69162,
      "TargetID": 69162,
      "SourceID": 5516,
      "Type": "Ribbon Synapse",
      "ID": 4325
    }, {
      "LinkedStructures": "    47378 -> 110424",
      "SourceStructureID": 5503,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5503,
      "Type": "Ribbon Synapse",
      "ID": 4176
    }, {
      "LinkedStructures": "    44440 -> 44439    44441 -> 44439",
      "SourceStructureID": 21299,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 21299,
      "Type": "Ribbon Synapse",
      "ID": 9206
    }, {
      "LinkedStructures": "    29048 -> 29045",
      "SourceStructureID": 7564,
      "TargetStructureID": 28950,
      "TargetID": 28950,
      "SourceID": 7564,
      "Type": "Conventional",
      "ID": 8114
    }, {
      "LinkedStructures": "    84221 -> 27325",
      "SourceStructureID": 6117,
      "TargetStructureID": 18693,
      "TargetID": 18693,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 6999
    }, {
      "LinkedStructures": "    51397 -> 51399    51396 -> 51401    51442 -> 51443    51451 -> 51453    51465 -> 51467    51479 -> 51480    30159 -> 51486    30159 -> 51486    51396 -> 51401    51397 -> 51399    51442 -> 51443    51451 -> 51453    51465 -> 51467    51479 -> 51480",
      "SourceStructureID": 5650,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5650,
      "Type": "Ribbon Synapse",
      "ID": 6092
    }, {
      "LinkedStructures": "    25090 -> 25089    30264 -> 30273    105061 -> 25087    105061 -> 25087    25090 -> 25089    30264 -> 30273",
      "SourceStructureID": 5650,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5650,
      "Type": "Ribbon Synapse",
      "ID": 6103
    }, {
      "LinkedStructures": "    7257 -> 55107    7281 -> 12356    12335 -> 12332    12337 -> 12338    12357 -> 12358    15954 -> 15955    15956 -> 15957    15975 -> 55153    16362 -> 12330    16364 -> 12326    16364 -> 12326    16362 -> 12330    12335 -> 12332    12337 -> 12338    7281 -> 12356    12357 -> 12358    15954 -> 15955    15956 -> 15957    7257 -> 55107    15975 -> 55153",
      "SourceStructureID": 307,
      "TargetStructureID": 9769,
      "TargetID": 9769,
      "SourceID": 307,
      "Type": "Ribbon Synapse",
      "ID": 675
    }, {
      "LinkedStructures": "    3970 -> 119510",
      "SourceStructureID": 1724,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 1724,
      "Type": "Ribbon Synapse",
      "ID": 2778
    }, {
      "LinkedStructures": "    12381 -> 53072    30744 -> 53080    50893 -> 53282    52391 -> 52392    53056 -> 53055    53062 -> 53061    53086 -> 53087    53158 -> 53159    53160 -> 53161    53261 -> 53262    53271 -> 53270    53280 -> 53285    53289 -> 53290    53301 -> 53302    53310 -> 53309    53311 -> 53304    52391 -> 52392    53056 -> 53055    53062 -> 53061    12381 -> 53072    30744 -> 53080    53086 -> 53087    53158 -> 53159    53160 -> 53161    53261 -> 53262    53271 -> 53270    50893 -> 53282    53280 -> 53285    53289 -> 53290    53301 -> 53302    53311 -> 53304    53310 -> 53309",
      "SourceStructureID": 324,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 732
    }, {
      "LinkedStructures": "    30869 -> 77928",
      "SourceStructureID": 6117,
      "TargetStructureID": 66523,
      "TargetID": 66523,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7032
    }, {
      "LinkedStructures": "    55405 -> 53269    55410 -> 53274    55447 -> 53315    55405 -> 53269    55410 -> 53274    55447 -> 53315",
      "SourceStructureID": 55403,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 55403,
      "Type": "Conventional",
      "ID": 11018
    }, {
      "LinkedStructures": "    49850 -> 55608    49850 -> 55608",
      "SourceStructureID": 5284,
      "TargetStructureID": 55517,
      "TargetID": 55517,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3705
    }, {
      "LinkedStructures": "    44913 -> 44355    44920 -> 44356    44913 -> 44355    44920 -> 44356",
      "SourceStructureID": 44912,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 44912,
      "Type": "Conventional",
      "ID": 10632
    }, {
      "LinkedStructures": "    1411 -> 53327    1422 -> 53201    47805 -> 47806    53322 -> 53323    53348 -> 53347    53354 -> 53347    53358 -> 53357    53367 -> 53368    47805 -> 47806    1422 -> 53201    53322 -> 53323    1411 -> 53327    53354 -> 53347    53348 -> 53347    53358 -> 53357    53367 -> 53368",
      "SourceStructureID": 170,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 170,
      "Type": "Ribbon Synapse",
      "ID": 163
    }, {
      "LinkedStructures": "    119589 -> 88058",
      "SourceStructureID": 142,
      "TargetStructureID": 3257,
      "TargetID": 3257,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 24
    }, {
      "LinkedStructures": "    90557 -> 53286    59500 -> 53306",
      "SourceStructureID": 59499,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 59499,
      "Type": "Gap Junction",
      "ID": 11234
    }, {
      "LinkedStructures": "    96063 -> 96064",
      "SourceStructureID": 5517,
      "TargetStructureID": 5513,
      "TargetID": 5513,
      "SourceID": 5517,
      "Type": "Unknown",
      "ID": 4334
    }, {
      "LinkedStructures": "    96502 -> 96501    96502 -> 96501",
      "SourceStructureID": 5517,
      "TargetStructureID": 2610,
      "TargetID": 2610,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4332
    }, {
      "LinkedStructures": "    48677 -> 48676    48677 -> 48676",
      "SourceStructureID": 1724,
      "TargetStructureID": 5279,
      "TargetID": 5279,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2780
    }, {
      "LinkedStructures": "    49229 -> 58627",
      "SourceStructureID": 5279,
      "TargetStructureID": 58592,
      "TargetID": 58592,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3522
    }, {
      "LinkedStructures": "    46566 -> 53369    46566 -> 53369",
      "SourceStructureID": 3116,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 3116,
      "Type": "Ribbon Synapse",
      "ID": 2909
    }, {
      "LinkedStructures": "    12595 -> 12596    12624 -> 12625    52737 -> 52736",
      "SourceStructureID": 431,
      "TargetStructureID": 428,
      "TargetID": 428,
      "SourceID": 431,
      "Type": "Gap Junction",
      "ID": 1107
    }, {
      "LinkedStructures": "    120086 -> 120087",
      "SourceStructureID": 909,
      "TargetStructureID": 61439,
      "TargetID": 61439,
      "SourceID": 909,
      "Type": "Unknown",
      "ID": 2587
    }, {
      "LinkedStructures": "    116366 -> 116392    116366 -> 116392",
      "SourceStructureID": 909,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2577
    }, {
      "LinkedStructures": "    12382 -> 93943    55179 -> 53295    55179 -> 53295    93925 -> 93926    93925 -> 93926    12382 -> 93943    96364 -> 96363    96364 -> 96363",
      "SourceStructureID": 324,
      "TargetStructureID": 324,
      "TargetID": 324,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 727
    }, {
      "LinkedStructures": "    90486 -> 90485    90486 -> 90485",
      "SourceStructureID": 4569,
      "TargetStructureID": 170,
      "TargetID": 170,
      "SourceID": 4569,
      "Type": "Unknown",
      "ID": 3045
    }, {
      "LinkedStructures": "    39425 -> 51576    49823 -> 49822    49823 -> 49822    49933 -> 49836    49851 -> 49846    49851 -> 49846    98153 -> 49880    54349 -> 49895    113223 -> 49897    49933 -> 49836    91802 -> 51566    39425 -> 51576    54349 -> 49895    91802 -> 51566    91803 -> 91804    91803 -> 91804    91884 -> 91883    91884 -> 91883    98153 -> 49880    113223 -> 49897",
      "SourceStructureID": 5284,
      "TargetStructureID": 5292,
      "TargetID": 5292,
      "SourceID": 5284,
      "Type": "Adherens",
      "ID": 3691
    }, {
      "LinkedStructures": "    122336 -> 90553    122358 -> 122357",
      "SourceStructureID": 372,
      "TargetStructureID": 59499,
      "TargetID": 59499,
      "SourceID": 372,
      "Type": "Ribbon Synapse",
      "ID": 945
    }, {
      "LinkedStructures": "    68128 -> 68127    68132 -> 68133    113577 -> 113576    68128 -> 68127    68132 -> 68133    113577 -> 113576",
      "SourceStructureID": 5284,
      "TargetStructureID": 68093,
      "TargetID": 68093,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3711
    }, {
      "LinkedStructures": "    55287 -> 37269    62003 -> 61739",
      "SourceStructureID": 440,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 440,
      "Type": "Ribbon Synapse",
      "ID": 1141
    }, {
      "LinkedStructures": "    29274 -> 47014    53023 -> 47018",
      "SourceStructureID": 408,
      "TargetStructureID": 47013,
      "TargetID": 47013,
      "SourceID": 408,
      "Type": "Ribbon Synapse",
      "ID": 1019
    }, {
      "LinkedStructures": "    54153 -> 10522    44282 -> 10523    54132 -> 54134    54151 -> 54147    54155 -> 54156    54154 -> 54157    54487 -> 54488    54550 -> 54488    54552 -> 54551    54568 -> 54571    54573 -> 54575    54592 -> 54591    54600 -> 54599    54603 -> 54607    54605 -> 54607    54604 -> 54607    44282 -> 10523    54132 -> 54134    54151 -> 54147    54153 -> 10522    54154 -> 54157    54155 -> 54156    54487 -> 54488    54550 -> 54488    54552 -> 54551    54568 -> 54571    54573 -> 54575    54592 -> 54591    54600 -> 54599    54603 -> 54607    54604 -> 54607    54605 -> 54607",
      "SourceStructureID": 5601,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5601,
      "Type": "Ribbon Synapse",
      "ID": 5678
    }, {
      "LinkedStructures": "    20272 -> 20268    46441 -> 46442    20272 -> 20268    46441 -> 46442",
      "SourceStructureID": 4877,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 4877,
      "Type": "Ribbon Synapse",
      "ID": 3208
    }, {
      "LinkedStructures": "    1244 -> 89744    1252 -> 89745    89490 -> 89491    89490 -> 89491    1244 -> 89744    1252 -> 89745",
      "SourceStructureID": 170,
      "TargetStructureID": 18693,
      "TargetID": 18693,
      "SourceID": 170,
      "Type": "Ribbon Synapse",
      "ID": 170
    }, {
      "LinkedStructures": "    12684 -> 60267",
      "SourceStructureID": 431,
      "TargetStructureID": 60264,
      "TargetID": 60264,
      "SourceID": 431,
      "Type": "Ribbon Synapse",
      "ID": 1119
    }, {
      "LinkedStructures": "    31044 -> 31043    31051 -> 31159    31064 -> 31047    31359 -> 31160    49518 -> 78898    76376 -> 76377    78447 -> 78448    78451 -> 78452    31044 -> 31043    31064 -> 31047    31051 -> 31159    31359 -> 31160    76376 -> 76377    78447 -> 78448    78451 -> 78452    49518 -> 78898",
      "SourceStructureID": 5562,
      "TargetStructureID": 31024,
      "TargetID": 31024,
      "SourceID": 5562,
      "Type": "Ribbon Synapse",
      "ID": 5051
    }, {
      "LinkedStructures": "    47611 -> 47612    51421 -> 51422    51800 -> 51799    53560 -> 53548    47611 -> 47612    51421 -> 51422    51800 -> 51799    53560 -> 53548",
      "SourceStructureID": 7594,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 7594,
      "Type": "Adherens",
      "ID": 8130
    }, {
      "LinkedStructures": "    30062 -> 30061    35829 -> 35828    48831 -> 48830    49062 -> 48872    50940 -> 50941    56969 -> 56970    91584 -> 91583    91626 -> 91625    30062 -> 30061    35829 -> 35828    48831 -> 48830    49062 -> 48872    50940 -> 50941    56969 -> 56970    91584 -> 91583    91626 -> 91625",
      "SourceStructureID": 168,
      "TargetStructureID": 21299,
      "TargetID": 21299,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 133
    }, {
      "LinkedStructures": "    15996 -> 14972",
      "SourceStructureID": 170,
      "TargetStructureID": 476,
      "TargetID": 476,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 161
    }, {
      "LinkedStructures": "    16021 -> 12344    16789 -> 60663    16021 -> 12344    16789 -> 60663",
      "SourceStructureID": 307,
      "TargetStructureID": 5513,
      "TargetID": 5513,
      "SourceID": 307,
      "Type": "Gap Junction",
      "ID": 673
    }, {
      "LinkedStructures": "    60783 -> 52801",
      "SourceStructureID": 5284,
      "TargetStructureID": 5503,
      "TargetID": 5503,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3694
    }, {
      "LinkedStructures": "    88029 -> 88030    88029 -> 88030",
      "SourceStructureID": 87972,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 87972,
      "Type": "Adherens",
      "ID": 15167
    }, {
      "LinkedStructures": "    20126 -> 104034    104193 -> 104196    20126 -> 104034    104193 -> 104196",
      "SourceStructureID": 5278,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 5278,
      "Type": "Ribbon Synapse",
      "ID": 3299
    }, {
      "LinkedStructures": "    48142 -> 48141    52864 -> 52865    121204 -> 121205    121716 -> 121717    48142 -> 48141    52864 -> 52865    121204 -> 121205    121716 -> 121717",
      "SourceStructureID": 408,
      "TargetStructureID": 24401,
      "TargetID": 24401,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1010
    }, {
      "LinkedStructures": "    12050 -> 9838    12050 -> 9838",
      "SourceStructureID": 7157,
      "TargetStructureID": 9787,
      "TargetID": 9787,
      "SourceID": 7157,
      "Type": "Conventional",
      "ID": 8033
    }, {
      "LinkedStructures": "    55117 -> 55116",
      "SourceStructureID": 5442,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5442,
      "Type": "Adherens",
      "ID": 3999
    }, {
      "LinkedStructures": "    54702 -> 54704    54707 -> 54708    54716 -> 54715",
      "SourceStructureID": 4877,
      "TargetStructureID": 54701,
      "TargetID": 54701,
      "SourceID": 4877,
      "Type": "Ribbon Synapse",
      "ID": 3212
    }, {
      "LinkedStructures": "    44447 -> 44446    49712 -> 49713    50125 -> 48925    91659 -> 91657    92441 -> 92440    44447 -> 44446    50125 -> 48925    49712 -> 49713    91659 -> 91657    92441 -> 92440",
      "SourceStructureID": 142,
      "TargetStructureID": 21299,
      "TargetID": 21299,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 32
    }, {
      "LinkedStructures": "    60725 -> 62995",
      "SourceStructureID": 5503,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 5503,
      "Type": "Ribbon Synapse",
      "ID": 4186
    }, {
      "LinkedStructures": "    94450 -> 94451    122349 -> 122350    122352 -> 122351    94450 -> 94451    122349 -> 122350    122352 -> 122351",
      "SourceStructureID": 324,
      "TargetStructureID": 3116,
      "TargetID": 3116,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 733
    }, {
      "LinkedStructures": "    6340 -> 3709    97531 -> 3779    49258 -> 3784    6340 -> 3709    97577 -> 27431    49258 -> 3784    92540 -> 92539    92540 -> 92539    97206 -> 97207    97206 -> 97207    97531 -> 3779    97577 -> 27431",
      "SourceStructureID": 5279,
      "TargetStructureID": 3679,
      "TargetID": 3679,
      "SourceID": 5279,
      "Type": "Gap Junction",
      "ID": 3502
    }, {
      "LinkedStructures": "    64608 -> 69176",
      "SourceStructureID": 5284,
      "TargetStructureID": 69162,
      "TargetID": 69162,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3715
    }, {
      "LinkedStructures": "    94071 -> 94070",
      "SourceStructureID": 324,
      "TargetStructureID": 428,
      "TargetID": 428,
      "SourceID": 324,
      "Type": "Unknown",
      "ID": 730
    }, {
      "LinkedStructures": "    77601 -> 77600    77601 -> 77600",
      "SourceStructureID": 5284,
      "TargetStructureID": 5562,
      "TargetID": 5562,
      "SourceID": 5284,
      "Type": "Touch",
      "ID": 3695
    }, {
      "LinkedStructures": "    122739 -> 122738    122776 -> 122775",
      "SourceStructureID": 299,
      "TargetStructureID": 298,
      "TargetID": 298,
      "SourceID": 299,
      "Type": "Gap Junction",
      "ID": 655
    }, {
      "LinkedStructures": "    74332 -> 74327",
      "SourceStructureID": 9769,
      "TargetStructureID": 74047,
      "TargetID": 74047,
      "SourceID": 9769,
      "Type": "Unknown",
      "ID": 8438
    }, {
      "LinkedStructures": "    19853 -> 19835    32218 -> 20120    19873 -> 114286",
      "SourceStructureID": 16073,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 16073,
      "Type": "Conventional",
      "ID": 8887
    }, {
      "LinkedStructures": "    50124 -> 88057",
      "SourceStructureID": 142,
      "TargetStructureID": 88055,
      "TargetID": 88055,
      "SourceID": 142,
      "Type": "Ribbon Synapse",
      "ID": 43
    }, {
      "LinkedStructures": "    75309 -> 75310",
      "SourceStructureID": 66523,
      "TargetStructureID": 16087,
      "TargetID": 16087,
      "SourceID": 66523,
      "Type": "Conventional",
      "ID": 12047
    }, {
      "LinkedStructures": "    88026 -> 88025    88026 -> 88025",
      "SourceStructureID": 5107,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 5107,
      "Type": "Adherens",
      "ID": 3266
    }, {
      "LinkedStructures": "    23458 -> 5186    61065 -> 7953    113647 -> 113646",
      "SourceStructureID": 5284,
      "TargetStructureID": 3679,
      "TargetID": 3679,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3688
    }, {
      "LinkedStructures": "    12369 -> 12367    12381 -> 12375    12383 -> 12384    12385 -> 12386    12387 -> 12388    12572 -> 12390    30744 -> 53081    52391 -> 12371    120594 -> 120595    120596 -> 120597    12369 -> 12367    52391 -> 12371    12381 -> 12375    12383 -> 12384    12385 -> 12386    12387 -> 12388    12572 -> 12390    30744 -> 53081    120594 -> 120595    120596 -> 120597",
      "SourceStructureID": 324,
      "TargetStructureID": 9769,
      "TargetID": 9769,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 736
    }, {
      "LinkedStructures": "    61691 -> 61690",
      "SourceStructureID": 428,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 428,
      "Type": "BC Conventional Synapse",
      "ID": 1092
    }, {
      "LinkedStructures": "    83934 -> 83937",
      "SourceStructureID": 6117,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 6998
    }, {
      "LinkedStructures": "    50897 -> 50898    50897 -> 50898",
      "SourceStructureID": 372,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 372,
      "Type": "Ribbon Synapse",
      "ID": 939
    }, {
      "LinkedStructures": "    92633 -> 92634    92645 -> 92646    98653 -> 98652",
      "SourceStructureID": 5279,
      "TargetStructureID": 1637,
      "TargetID": 1637,
      "SourceID": 5279,
      "Type": "Unknown",
      "ID": 3501
    }, {
      "LinkedStructures": "    66397 -> 66398    66397 -> 66398",
      "SourceStructureID": 66395,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 66395,
      "Type": "Conventional",
      "ID": 12004
    }, {
      "LinkedStructures": "    58651 -> 58652",
      "SourceStructureID": 176,
      "TargetStructureID": 20327,
      "TargetID": 20327,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 342
    }, {
      "LinkedStructures": "    16591 -> 46860    16591 -> 46860",
      "SourceStructureID": 307,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 307,
      "Type": "Ribbon Synapse",
      "ID": 674
    }, {
      "LinkedStructures": "    18813 -> 15636",
      "SourceStructureID": 6169,
      "TargetStructureID": 12203,
      "TargetID": 12203,
      "SourceID": 6169,
      "Type": "Conventional",
      "ID": 7696
    }, {
      "LinkedStructures": "    86471 -> 86472",
      "SourceStructureID": 6117,
      "TargetStructureID": 35240,
      "TargetID": 35240,
      "SourceID": 6117,
      "Type": "Adherens",
      "ID": 7003
    }, {
      "LinkedStructures": "    33193 -> 33192    33194 -> 33192    33193 -> 33192    33194 -> 33192",
      "SourceStructureID": 440,
      "TargetStructureID": 33161,
      "TargetID": 33161,
      "SourceID": 440,
      "Type": "Ribbon Synapse",
      "ID": 1144
    }, {
      "LinkedStructures": "    27995 -> 73642    27995 -> 73642",
      "SourceStructureID": 3116,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 3116,
      "Type": "Ribbon Synapse",
      "ID": 2918
    }, {
      "LinkedStructures": "    30993 -> 38644",
      "SourceStructureID": 372,
      "TargetStructureID": 38632,
      "TargetID": 38632,
      "SourceID": 372,
      "Type": "Ribbon Synapse",
      "ID": 944
    }, {
      "LinkedStructures": "    19883 -> 62816    19883 -> 62816",
      "SourceStructureID": 7073,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 7073,
      "Type": "Conventional",
      "ID": 7940
    }, {
      "LinkedStructures": "    39431 -> 39432    39431 -> 39432",
      "SourceStructureID": 5297,
      "TargetStructureID": 22974,
      "TargetID": 22974,
      "SourceID": 5297,
      "Type": "Ribbon Synapse",
      "ID": 3793
    }, {
      "LinkedStructures": "    88039 -> 88038    88039 -> 88038",
      "SourceStructureID": 87972,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 87972,
      "Type": "Ribbon Synapse",
      "ID": 15169
    }, {
      "LinkedStructures": "    86104 -> 86103",
      "SourceStructureID": 6117,
      "TargetStructureID": 39957,
      "TargetID": 39957,
      "SourceID": 6117,
      "Type": "Unknown",
      "ID": 7007
    }, {
      "LinkedStructures": "    58716 -> 58717    91854 -> 91853",
      "SourceStructureID": 176,
      "TargetStructureID": 6117,
      "TargetID": 6117,
      "SourceID": 176,
      "Type": "Gap Junction",
      "ID": 340
    }, {
      "LinkedStructures": "    30892 -> 35997    84977 -> 84979    85986 -> 85988",
      "SourceStructureID": 6117,
      "TargetStructureID": 35975,
      "TargetID": 35975,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7006
    }, {
      "LinkedStructures": "    84371 -> 84381",
      "SourceStructureID": 6117,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7033
    }, {
      "LinkedStructures": "    96362 -> 96361    97623 -> 97624    97626 -> 97625",
      "SourceStructureID": 5279,
      "TargetStructureID": 39957,
      "TargetID": 39957,
      "SourceID": 5279,
      "Type": "BC Conventional Synapse",
      "ID": 3518
    }, {
      "LinkedStructures": "    5185 -> 5183    5185 -> 5183    15437 -> 5233    15437 -> 5233",
      "SourceStructureID": 3679,
      "TargetStructureID": 5150,
      "TargetID": 5150,
      "SourceID": 3679,
      "Type": "Conventional",
      "ID": 2960
    }, {
      "LinkedStructures": "    44389 -> 44388    122875 -> 122876    44389 -> 44388    122875 -> 122876",
      "SourceStructureID": 440,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 440,
      "Type": "Ribbon Synapse",
      "ID": 1147
    }, {
      "LinkedStructures": "    46031 -> 109228",
      "SourceStructureID": 20136,
      "TargetStructureID": 69162,
      "TargetID": 69162,
      "SourceID": 20136,
      "Type": "Ribbon Synapse",
      "ID": 8988
    }, {
      "LinkedStructures": "    55509 -> 55508    55510 -> 55511    55509 -> 55508    55510 -> 55511",
      "SourceStructureID": 55403,
      "TargetStructureID": 31024,
      "TargetID": 31024,
      "SourceID": 55403,
      "Type": "Conventional",
      "ID": 11022
    }, {
      "LinkedStructures": "    47488 -> 47489",
      "SourceStructureID": 4569,
      "TargetStructureID": 3257,
      "TargetID": 3257,
      "SourceID": 4569,
      "Type": "Gap Junction",
      "ID": 3052
    }, {
      "LinkedStructures": "    97217 -> 97220",
      "SourceStructureID": 5279,
      "TargetStructureID": 66523,
      "TargetID": 66523,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3527
    }, {
      "LinkedStructures": "    44215 -> 10511    23861 -> 10514    54047 -> 10518    54106 -> 10521    23844 -> 23840    23859 -> 44214    44247 -> 44243    42097 -> 50902    42099 -> 50903    42141 -> 50906    50952 -> 50950    52525 -> 52524    52529 -> 52531    45233 -> 52543    53413 -> 53412    53483 -> 53482    53506 -> 53507    53525 -> 53524    53526 -> 53527    42145 -> 53541    53543 -> 53544    54030 -> 54031    54034 -> 54035    54043 -> 54044    54055 -> 54056    81133 -> 81134    23844 -> 23840    23859 -> 44214    23861 -> 10514    42097 -> 50902    42099 -> 50903    42141 -> 50906    42145 -> 53541    44215 -> 10511    44247 -> 44243    45233 -> 52543    50952 -> 50950    52525 -> 52524    52529 -> 52531    53413 -> 53412    53483 -> 53482    53506 -> 53507    53525 -> 53524    53526 -> 53527    53543 -> 53544    54030 -> 54031    54034 -> 54035    54043 -> 54044    54047 -> 10518    54055 -> 54056    54106 -> 10521    81133 -> 81134",
      "SourceStructureID": 5530,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5530,
      "Type": "Ribbon Synapse",
      "ID": 4517
    }, {
      "LinkedStructures": "    58598 -> 58599",
      "SourceStructureID": 4569,
      "TargetStructureID": 428,
      "TargetID": 428,
      "SourceID": 4569,
      "Type": "Gap Junction",
      "ID": 3048
    }, {
      "LinkedStructures": "    51341 -> 51351    51352 -> 51353    51366 -> 51367    59487 -> 59488    51341 -> 51351    51352 -> 51353    51366 -> 51367    59487 -> 59488",
      "SourceStructureID": 5292,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 5292,
      "Type": "Ribbon Synapse",
      "ID": 3734
    }, {
      "LinkedStructures": "    49476 -> 49477    49478 -> 49483",
      "SourceStructureID": 5517,
      "TargetStructureID": 5561,
      "TargetID": 5561,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4336
    }, {
      "LinkedStructures": "    96114 -> 96115",
      "SourceStructureID": 5517,
      "TargetStructureID": 5516,
      "TargetID": 5516,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4335
    }, {
      "LinkedStructures": "    83232 -> 83233    86374 -> 87085    86400 -> 87087",
      "SourceStructureID": 6117,
      "TargetStructureID": 5377,
      "TargetID": 5377,
      "SourceID": 6117,
      "Type": "Unknown",
      "ID": 6990
    }, {
      "LinkedStructures": "    92199 -> 92198    92664 -> 92202    92671 -> 92672    92710 -> 92712    92714 -> 99273",
      "SourceStructureID": 5279,
      "TargetStructureID": 5278,
      "TargetID": 5278,
      "SourceID": 5279,
      "Type": "Touch",
      "ID": 3504
    }, {
      "LinkedStructures": "    12453 -> 27449    12453 -> 27449",
      "SourceStructureID": 168,
      "TargetStructureID": 906,
      "TargetID": 906,
      "SourceID": 168,
      "Type": "Cistern Pre",
      "ID": 123
    }, {
      "LinkedStructures": "    35677 -> 35678    47825 -> 47824",
      "SourceStructureID": 35653,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 35653,
      "Type": "Conventional",
      "ID": 10070
    }, {
      "LinkedStructures": "    59088 -> 59083    59088 -> 59083",
      "SourceStructureID": 6117,
      "TargetStructureID": 3257,
      "TargetID": 3257,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6985
    }, {
      "LinkedStructures": "    93554 -> 93553    94257 -> 94256",
      "SourceStructureID": 324,
      "TargetStructureID": 4835,
      "TargetID": 4835,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 734
    }, {
      "LinkedStructures": "    15511 -> 107869    15511 -> 107869",
      "SourceStructureID": 6155,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 6155,
      "Type": "Ribbon Synapse",
      "ID": 7468
    }, {
      "LinkedStructures": "    63876 -> 79633    63876 -> 79633",
      "SourceStructureID": 5562,
      "TargetStructureID": 66958,
      "TargetID": 66958,
      "SourceID": 5562,
      "Type": "Ribbon Synapse",
      "ID": 5060
    }, {
      "LinkedStructures": "    93063 -> 93062    93063 -> 93062",
      "SourceStructureID": 168,
      "TargetStructureID": 168,
      "TargetID": 168,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 118
    }, {
      "LinkedStructures": "    47615 -> 47616    51097 -> 51098    51745 -> 51746    52500 -> 52501    54445 -> 54446    47615 -> 47616    51097 -> 51098    51745 -> 51746    52500 -> 52501    54445 -> 54446",
      "SourceStructureID": 606,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 606,
      "Type": "Cistern Pre",
      "ID": 2512
    }, {
      "LinkedStructures": "    49484 -> 49485    59117 -> 59115",
      "SourceStructureID": 5517,
      "TargetStructureID": 909,
      "TargetID": 909,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4329
    }, {
      "LinkedStructures": "    56788 -> 56787",
      "SourceStructureID": 6117,
      "TargetStructureID": 4877,
      "TargetID": 4877,
      "SourceID": 6117,
      "Type": "Gap Junction",
      "ID": 6987
    }, {
      "LinkedStructures": "    43116 -> 10711    58552 -> 39960    58555 -> 44285    58558 -> 49604    43116 -> 10711    58552 -> 39960    58555 -> 44285    58558 -> 49604",
      "SourceStructureID": 39957,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 39957,
      "Type": "Conventional",
      "ID": 10394
    }, {
      "LinkedStructures": "    5858 -> 44914",
      "SourceStructureID": 176,
      "TargetStructureID": 44912,
      "TargetID": 44912,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 349
    }, {
      "LinkedStructures": "    62753 -> 62752    91294 -> 91295    91298 -> 91296    91306 -> 91305    91337 -> 91336    62753 -> 62752    91294 -> 91295    91298 -> 91296    91306 -> 91305    91337 -> 91336",
      "SourceStructureID": 176,
      "TargetStructureID": 4877,
      "TargetID": 4877,
      "SourceID": 176,
      "Type": "Gap Junction",
      "ID": 335
    }, {
      "LinkedStructures": "    18076 -> 12071    60922 -> 18086",
      "SourceStructureID": 6169,
      "TargetStructureID": 9787,
      "TargetID": 9787,
      "SourceID": 6169,
      "Type": "Conventional",
      "ID": 7694
    }, {
      "LinkedStructures": "    15411 -> 5268    15421 -> 15418",
      "SourceStructureID": 6153,
      "TargetStructureID": 5150,
      "TargetID": 5150,
      "SourceID": 6153,
      "Type": "Conventional",
      "ID": 7454
    }, {
      "LinkedStructures": "    24400 -> 24399",
      "SourceStructureID": 5517,
      "TargetStructureID": 514,
      "TargetID": 514,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4327
    }, {
      "LinkedStructures": "    85973 -> 85972    85973 -> 85972    97142 -> 97141    97142 -> 97141    98034 -> 98033    98034 -> 98033",
      "SourceStructureID": 6117,
      "TargetStructureID": 5279,
      "TargetID": 5279,
      "SourceID": 6117,
      "Type": "Unknown",
      "ID": 6988
    }, {
      "LinkedStructures": "    4185 -> 53384    33417 -> 53382    44415 -> 53517    53388 -> 53389    53484 -> 53485    33417 -> 53382    4185 -> 53384    53388 -> 53389    53484 -> 53485    44415 -> 53517",
      "SourceStructureID": 168,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 168,
      "Type": "Ribbon Synapse",
      "ID": 122
    }, {
      "LinkedStructures": "    32191 -> 21648",
      "SourceStructureID": 16073,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 16073,
      "Type": "Conventional",
      "ID": 8886
    }, {
      "LinkedStructures": "    5896 -> 88277",
      "SourceStructureID": 176,
      "TargetStructureID": 88260,
      "TargetID": 88260,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 356
    }, {
      "LinkedStructures": "    42714 -> 42713    42714 -> 42713",
      "SourceStructureID": 606,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 606,
      "Type": "Conventional",
      "ID": 2499
    }, {
      "LinkedStructures": "    47254 -> 47255    53469 -> 53470    53508 -> 53509    53512 -> 53513    53977 -> 53978    47254 -> 47255    53469 -> 53470    53508 -> 53509    53512 -> 53513    53977 -> 53978",
      "SourceStructureID": 595,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 595,
      "Type": "Ribbon Synapse",
      "ID": 2462
    }, {
      "LinkedStructures": "    88363 -> 88364",
      "SourceStructureID": 170,
      "TargetStructureID": 35653,
      "TargetID": 35653,
      "SourceID": 170,
      "Type": "Adherens",
      "ID": 175
    }, {
      "LinkedStructures": "    44192 -> 39504    44192 -> 39504",
      "SourceStructureID": 40039,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 40039,
      "Type": "Conventional",
      "ID": 10419
    }, {
      "LinkedStructures": "    63500 -> 63499",
      "SourceStructureID": 298,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 298,
      "Type": "Ribbon Synapse",
      "ID": 652
    }, {
      "LinkedStructures": "    6354 -> 97284",
      "SourceStructureID": 5279,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3503
    }, {
      "LinkedStructures": "    49367 -> 58631",
      "SourceStructureID": 5517,
      "TargetStructureID": 58592,
      "TargetID": 58592,
      "SourceID": 5517,
      "Type": "Ribbon Synapse",
      "ID": 4347
    }, {
      "LinkedStructures": "    64601 -> 64602    113640 -> 113639    64601 -> 64602    113640 -> 113639",
      "SourceStructureID": 5284,
      "TargetStructureID": 909,
      "TargetID": 909,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3687
    }, {
      "LinkedStructures": "    70271 -> 68983    70271 -> 68983",
      "SourceStructureID": 68539,
      "TargetStructureID": 22974,
      "TargetID": 22974,
      "SourceID": 68539,
      "Type": "Adherens",
      "ID": 12561
    }, {
      "LinkedStructures": "    69256 -> 47027    69256 -> 47027",
      "SourceStructureID": 69162,
      "TargetStructureID": 47013,
      "TargetID": 47013,
      "SourceID": 69162,
      "Type": "Adherens",
      "ID": 12675
    }, {
      "LinkedStructures": "    48682 -> 48681",
      "SourceStructureID": 1724,
      "TargetStructureID": 21299,
      "TargetID": 21299,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2784
    }, {
      "LinkedStructures": "    69857 -> 69856    92135 -> 92134",
      "SourceStructureID": 1724,
      "TargetStructureID": 5278,
      "TargetID": 5278,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2779
    }, {
      "LinkedStructures": "    55577 -> 55578    55593 -> 55592",
      "SourceStructureID": 6117,
      "TargetStructureID": 55517,
      "TargetID": 55517,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7016
    }, {
      "LinkedStructures": "    49029 -> 48312    49029 -> 48312",
      "SourceStructureID": 408,
      "TargetStructureID": 6155,
      "TargetID": 6155,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1008
    }, {
      "LinkedStructures": "    1304 -> 5172    4576 -> 5167    15406 -> 15405",
      "SourceStructureID": 514,
      "TargetStructureID": 5150,
      "TargetID": 5150,
      "SourceID": 514,
      "Type": "Conventional",
      "ID": 1962
    }, {
      "LinkedStructures": "    24861 -> 24863    65000 -> 64999    110052 -> 110056",
      "SourceStructureID": 5503,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 5503,
      "Type": "Ribbon Synapse",
      "ID": 4177
    }, {
      "LinkedStructures": "    44816 -> 44814",
      "SourceStructureID": 595,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 595,
      "Type": "Ribbon Synapse",
      "ID": 2472
    }, {
      "LinkedStructures": "    30139 -> 53438",
      "SourceStructureID": 9769,
      "TargetStructureID": 53436,
      "TargetID": 53436,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8414
    }, {
      "LinkedStructures": "    30927 -> 86511    86507 -> 86508",
      "SourceStructureID": 6117,
      "TargetStructureID": 45220,
      "TargetID": 45220,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7011
    }, {
      "LinkedStructures": "    6351 -> 62897",
      "SourceStructureID": 5279,
      "TargetStructureID": 8579,
      "TargetID": 8579,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3513
    }, {
      "LinkedStructures": "    56488 -> 54567    62930 -> 62931    91661 -> 91660    91672 -> 91670    91691 -> 91690    91706 -> 91707    91717 -> 91718    91719 -> 91720    91877 -> 91876    91972 -> 91973    91986 -> 106489    93441 -> 93440",
      "SourceStructureID": 176,
      "TargetStructureID": 5531,
      "TargetID": 5531,
      "SourceID": 176,
      "Type": "Gap Junction",
      "ID": 338
    }, {
      "LinkedStructures": "    62060 -> 62058    120142 -> 120146    62060 -> 62058    120142 -> 120146",
      "SourceStructureID": 909,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2575
    }, {
      "LinkedStructures": "    49731 -> 20124    98430 -> 98431    104214 -> 104213    114493 -> 114492    49731 -> 20124    98430 -> 98431    104214 -> 104213    114493 -> 114492",
      "SourceStructureID": 142,
      "TargetStructureID": 5278,
      "TargetID": 5278,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 26
    }, {
      "LinkedStructures": "    69864 -> 108981    70044 -> 70043    70044 -> 70043    69864 -> 108981",
      "SourceStructureID": 20136,
      "TargetStructureID": 67663,
      "TargetID": 67663,
      "SourceID": 20136,
      "Type": "Ribbon Synapse",
      "ID": 8986
    }, {
      "LinkedStructures": "    49427 -> 49633    120872 -> 120873",
      "SourceStructureID": 5517,
      "TargetStructureID": 19203,
      "TargetID": 19203,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4340
    }, {
      "LinkedStructures": "    82420 -> 80613    119655 -> 119654    82420 -> 80613    119655 -> 119654",
      "SourceStructureID": 176,
      "TargetStructureID": 5530,
      "TargetID": 5530,
      "SourceID": 176,
      "Type": "Unknown",
      "ID": 337
    }, {
      "LinkedStructures": "    39515 -> 90247    90624 -> 90625",
      "SourceStructureID": 170,
      "TargetStructureID": 5481,
      "TargetID": 5481,
      "SourceID": 170,
      "Type": "Ribbon Synapse",
      "ID": 166
    }, {
      "LinkedStructures": "    36061 -> 69866    36061 -> 69866",
      "SourceStructureID": 909,
      "TargetStructureID": 67663,
      "TargetID": 67663,
      "SourceID": 909,
      "Type": "Ribbon Synapse",
      "ID": 2594
    }, {
      "LinkedStructures": "    87976 -> 87977    87984 -> 87985    87986 -> 87987    88041 -> 88040    88043 -> 88044",
      "SourceStructureID": 87972,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 87972,
      "Type": "Adherens",
      "ID": 15168
    }, {
      "LinkedStructures": "    43552 -> 52519    43552 -> 52519",
      "SourceStructureID": 170,
      "TargetStructureID": 4569,
      "TargetID": 4569,
      "SourceID": 170,
      "Type": "Gap Junction",
      "ID": 165
    }, {
      "LinkedStructures": "    60265 -> 60263",
      "SourceStructureID": 60264,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 60264,
      "Type": "Conventional",
      "ID": 11338
    }, {
      "LinkedStructures": "    86379 -> 86380",
      "SourceStructureID": 6117,
      "TargetStructureID": 40039,
      "TargetID": 40039,
      "SourceID": 6117,
      "Type": "Adherens",
      "ID": 7008
    }, {
      "LinkedStructures": "    61588 -> 17383",
      "SourceStructureID": 61587,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 61587,
      "Type": "Conventional",
      "ID": 11434
    }, {
      "LinkedStructures": "    30724 -> 38661    30726 -> 38660    30728 -> 38663    30731 -> 38658    30733 -> 38653    30734 -> 38650    30735 -> 38648    93620 -> 93619    94230 -> 94229",
      "SourceStructureID": 324,
      "TargetStructureID": 38632,
      "TargetID": 38632,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 741
    }, {
      "LinkedStructures": "    50112 -> 70155    50113 -> 96580    70167 -> 70161    50112 -> 70155    70167 -> 70161    50113 -> 96580",
      "SourceStructureID": 5516,
      "TargetStructureID": 68153,
      "TargetID": 68153,
      "SourceID": 5516,
      "Type": "Ribbon Synapse",
      "ID": 4324
    }, {
      "LinkedStructures": "    46856 -> 46855    46856 -> 46855",
      "SourceStructureID": 9769,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 9769,
      "Type": "Adherens",
      "ID": 8383
    }, {
      "LinkedStructures": "    49267 -> 49275    49267 -> 49275",
      "SourceStructureID": 5279,
      "TargetStructureID": 5517,
      "TargetID": 5517,
      "SourceID": 5279,
      "Type": "Gap Junction",
      "ID": 3509
    }, {
      "LinkedStructures": "    35929 -> 11950    49714 -> 16172    88053 -> 16174    31777 -> 16240    32086 -> 24646    49702 -> 49703    49720 -> 49721",
      "SourceStructureID": 142,
      "TargetStructureID": 6169,
      "TargetID": 6169,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 30
    }, {
      "LinkedStructures": "    25117 -> 25116",
      "SourceStructureID": 2610,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 2610,
      "Type": "Touch",
      "ID": 2897
    }, {
      "LinkedStructures": "    86589 -> 86590    86589 -> 86590",
      "SourceStructureID": 86582,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 86582,
      "Type": "Conventional",
      "ID": 14991
    }, {
      "LinkedStructures": "    23721 -> 101854",
      "SourceStructureID": 1724,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 1724,
      "Type": "Ribbon Synapse",
      "ID": 2782
    }, {
      "LinkedStructures": "    55573 -> 59009    55573 -> 59009",
      "SourceStructureID": 55517,
      "TargetStructureID": 59008,
      "TargetID": 59008,
      "SourceID": 55517,
      "Type": "Conventional",
      "ID": 11037
    }, {
      "LinkedStructures": "    43562 -> 55452    53271 -> 55406    55416 -> 55417    55434 -> 55433    53271 -> 55406    55416 -> 55417    55434 -> 55433    43562 -> 55452",
      "SourceStructureID": 324,
      "TargetStructureID": 55403,
      "TargetID": 55403,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 743
    }, {
      "LinkedStructures": "    52383 -> 52384",
      "SourceStructureID": 324,
      "TargetStructureID": 50982,
      "TargetID": 50982,
      "SourceID": 324,
      "Type": "Ribbon Synapse",
      "ID": 742
    }, {
      "LinkedStructures": "    48138 -> 69310    48138 -> 69310",
      "SourceStructureID": 24401,
      "TargetStructureID": 61864,
      "TargetID": 61864,
      "SourceID": 24401,
      "Type": "Ribbon Synapse",
      "ID": 9315
    }, {
      "LinkedStructures": "    90456 -> 90457",
      "SourceStructureID": 170,
      "TargetStructureID": 428,
      "TargetID": 428,
      "SourceID": 170,
      "Type": "Touch",
      "ID": 160
    }, {
      "LinkedStructures": "    49508 -> 49630    116814 -> 116813    116854 -> 116853    116861 -> 116860",
      "SourceStructureID": 5517,
      "TargetStructureID": 1637,
      "TargetID": 1637,
      "SourceID": 5517,
      "Type": "Gap Junction",
      "ID": 4331
    }, {
      "LinkedStructures": "    23465 -> 23466    23926 -> 23924    53406 -> 53405    23465 -> 23466    23926 -> 23924    53406 -> 53405",
      "SourceStructureID": 5284,
      "TargetStructureID": 9769,
      "TargetID": 9769,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3699
    }, {
      "LinkedStructures": "    23943 -> 23921    23945 -> 23942    93096 -> 93098",
      "SourceStructureID": 5601,
      "TargetStructureID": 23870,
      "TargetID": 23870,
      "SourceID": 5601,
      "Type": "Ribbon Synapse",
      "ID": 5691
    }, {
      "LinkedStructures": "    51630 -> 45766    51630 -> 45766",
      "SourceStructureID": 408,
      "TargetStructureID": 28886,
      "TargetID": 28886,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1012
    }, {
      "LinkedStructures": "    20329 -> 20267",
      "SourceStructureID": 20327,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 20327,
      "Type": "Conventional",
      "ID": 9176
    }, {
      "LinkedStructures": "    3040 -> 5152    4831 -> 5155    3040 -> 5152    4831 -> 5155",
      "SourceStructureID": 476,
      "TargetStructureID": 5150,
      "TargetID": 5150,
      "SourceID": 476,
      "Type": "Conventional",
      "ID": 1254
    }, {
      "LinkedStructures": "    60269 -> 60268    60269 -> 60268",
      "SourceStructureID": 431,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 431,
      "Type": "Adherens",
      "ID": 1111
    }, {
      "LinkedStructures": "    49272 -> 88011",
      "SourceStructureID": 5517,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 5517,
      "Type": "Ribbon Synapse",
      "ID": 4350
    }, {
      "LinkedStructures": "    86591 -> 86592",
      "SourceStructureID": 6117,
      "TargetStructureID": 86582,
      "TargetID": 86582,
      "SourceID": 6117,
      "Type": "Unknown",
      "ID": 7202
    }, {
      "LinkedStructures": "    68703 -> 68704",
      "SourceStructureID": 307,
      "TargetStructureID": 38632,
      "TargetID": 38632,
      "SourceID": 307,
      "Type": "Ribbon Synapse",
      "ID": 678
    }, {
      "LinkedStructures": "    88340 -> 88339    88340 -> 88339",
      "SourceStructureID": 168,
      "TargetStructureID": 170,
      "TargetID": 170,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 119
    }, {
      "LinkedStructures": "    30752 -> 10789    16014 -> 15994    16014 -> 15994    30752 -> 10789",
      "SourceStructureID": 324,
      "TargetStructureID": 170,
      "TargetID": 170,
      "SourceID": 324,
      "Type": "Gap Junction",
      "ID": 723
    }, {
      "LinkedStructures": "    42152 -> 10434    35242 -> 35243    44220 -> 44219    53432 -> 51437    51725 -> 51726    53534 -> 53535    35242 -> 35243    42152 -> 10434    44220 -> 44219    51725 -> 51726    53432 -> 51437    53534 -> 53535",
      "SourceStructureID": 35240,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 35240,
      "Type": "Conventional",
      "ID": 9977
    }, {
      "LinkedStructures": "    89116 -> 51380    89117 -> 51381    59485 -> 51385    59485 -> 51385    89116 -> 51380    89117 -> 51381",
      "SourceStructureID": 59482,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 59482,
      "Type": "Gap Junction",
      "ID": 11231
    }, {
      "LinkedStructures": "    53605 -> 53604    65989 -> 65990    92328 -> 92329    53605 -> 53604    65989 -> 65990    92328 -> 92329",
      "SourceStructureID": 142,
      "TargetStructureID": 5297,
      "TargetID": 5297,
      "SourceID": 142,
      "Type": "Gap Junction",
      "ID": 28
    }, {
      "LinkedStructures": "    6351 -> 97231",
      "SourceStructureID": 5279,
      "TargetStructureID": 88565,
      "TargetID": 88565,
      "SourceID": 5279,
      "Type": "Ribbon Synapse",
      "ID": 3533
    }, {
      "LinkedStructures": "    38594 -> 38592    38594 -> 38592",
      "SourceStructureID": 431,
      "TargetStructureID": 34868,
      "TargetID": 34868,
      "SourceID": 431,
      "Type": "Ribbon Synapse",
      "ID": 1117
    }, {
      "LinkedStructures": "    35766 -> 35767    35766 -> 35767",
      "SourceStructureID": 408,
      "TargetStructureID": 307,
      "TargetID": 307,
      "SourceID": 408,
      "Type": "Gap Junction",
      "ID": 1003
    }, {
      "LinkedStructures": "    6967 -> 51270    10526 -> 12566    10715 -> 51305    22385 -> 84190    30883 -> 84247    45117 -> 45118    51326 -> 11268    51546 -> 84173    54012 -> 83281    54285 -> 23929    58594 -> 83130    86013 -> 86075",
      "SourceStructureID": 6117,
      "TargetStructureID": 9769,
      "TargetID": 9769,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 6997
    }, {
      "LinkedStructures": "    64720 -> 64778    64720 -> 64778",
      "SourceStructureID": 18693,
      "TargetStructureID": 64777,
      "TargetID": 64777,
      "SourceID": 18693,
      "Type": "Conventional",
      "ID": 8934
    }, {
      "LinkedStructures": "    47074 -> 47070    47075 -> 47069",
      "SourceStructureID": 299,
      "TargetStructureID": 47013,
      "TargetID": 47013,
      "SourceID": 299,
      "Type": "Ribbon Synapse",
      "ID": 660
    }, {
      "LinkedStructures": "    12042 -> 12045    12043 -> 12044    12060 -> 9788    18038 -> 18037    18650 -> 12066",
      "SourceStructureID": 4835,
      "TargetStructureID": 9787,
      "TargetID": 9787,
      "SourceID": 4835,
      "Type": "Conventional",
      "ID": 3178
    }, {
      "LinkedStructures": "    34751 -> 19834    34751 -> 19834",
      "SourceStructureID": 24401,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 24401,
      "Type": "Ribbon Synapse",
      "ID": 9308
    }, {
      "LinkedStructures": "    119633 -> 119632    119633 -> 119632",
      "SourceStructureID": 168,
      "TargetStructureID": 176,
      "TargetID": 176,
      "SourceID": 168,
      "Type": "Gap Junction",
      "ID": 120
    }, {
      "LinkedStructures": "    72880 -> 72891",
      "SourceStructureID": 72879,
      "TargetStructureID": 68539,
      "TargetID": 68539,
      "SourceID": 72879,
      "Type": "Conventional",
      "ID": 13160
    }, {
      "LinkedStructures": "    39428 -> 39427    39428 -> 39427    98150 -> 60839    68601 -> 68599    68601 -> 68599    98150 -> 60839    112850 -> 112851    112850 -> 112851    113522 -> 113521    113522 -> 113521    113613 -> 113612    113613 -> 113612    116316 -> 116315    116316 -> 116315    116474 -> 116473    116474 -> 116473",
      "SourceStructureID": 5284,
      "TargetStructureID": 5297,
      "TargetID": 5297,
      "SourceID": 5284,
      "Type": "Gap Junction",
      "ID": 3692
    }, {
      "LinkedStructures": "    47361 -> 102030    102004 -> 102003    102930 -> 102929",
      "SourceStructureID": 1724,
      "TargetStructureID": 26079,
      "TargetID": 26079,
      "SourceID": 1724,
      "Type": "Gap Junction",
      "ID": 2786
    }, {
      "LinkedStructures": "    97297 -> 97298",
      "SourceStructureID": 5279,
      "TargetStructureID": 61836,
      "TargetID": 61836,
      "SourceID": 5279,
      "Type": "BC Conventional Synapse",
      "ID": 3525
    }, {
      "LinkedStructures": "    122297 -> 122291",
      "SourceStructureID": 372,
      "TargetStructureID": 428,
      "TargetID": 428,
      "SourceID": 372,
      "Type": "Gap Junction",
      "ID": 937
    }, {
      "LinkedStructures": "    17906 -> 17907    17906 -> 17907",
      "SourceStructureID": 5530,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5530,
      "Type": "Ribbon Synapse",
      "ID": 4528
    }, {
      "LinkedStructures": "    24083 -> 24100    24083 -> 24100",
      "SourceStructureID": 6155,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 6155,
      "Type": "Cistern Pre",
      "ID": 7469
    }, {
      "LinkedStructures": "    52813 -> 52814",
      "SourceStructureID": 606,
      "TargetStructureID": 12408,
      "TargetID": 12408,
      "SourceID": 606,
      "Type": "Adherens",
      "ID": 2515
    }, {
      "LinkedStructures": "    52909 -> 61592",
      "SourceStructureID": 408,
      "TargetStructureID": 61587,
      "TargetID": 61587,
      "SourceID": 408,
      "Type": "Ribbon Synapse",
      "ID": 1020
    }, {
      "LinkedStructures": "    30911 -> 58743",
      "SourceStructureID": 6117,
      "TargetStructureID": 58741,
      "TargetID": 58741,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7023
    }, {
      "LinkedStructures": "    44976 -> 44347    44976 -> 44347",
      "SourceStructureID": 44970,
      "TargetStructureID": 44346,
      "TargetID": 44346,
      "SourceID": 44970,
      "Type": "Adherens",
      "ID": 10635
    }, {
      "LinkedStructures": "    19803 -> 66331    19803 -> 66331",
      "SourceStructureID": 8579,
      "TargetStructureID": 61864,
      "TargetID": 61864,
      "SourceID": 8579,
      "Type": "Adherens",
      "ID": 8273
    }, {
      "LinkedStructures": "    1222 -> 29844    1224 -> 54957    1228 -> 29845    1314 -> 29825    1315 -> 89730    88755 -> 88754    88757 -> 88758    89731 -> 89732    89733 -> 89734    1314 -> 29825    1222 -> 29844    1228 -> 29845    1224 -> 54957    88755 -> 88754    88757 -> 88758    1315 -> 89730    89731 -> 89732    89733 -> 89734",
      "SourceStructureID": 170,
      "TargetStructureID": 9769,
      "TargetID": 9769,
      "SourceID": 170,
      "Type": "Ribbon Synapse",
      "ID": 169
    }, {
      "LinkedStructures": "    68170 -> 68171    68170 -> 68171",
      "SourceStructureID": 5284,
      "TargetStructureID": 68153,
      "TargetID": 68153,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3713
    }, {
      "LinkedStructures": "    53563 -> 53564    53563 -> 53564",
      "SourceStructureID": 176,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 176,
      "Type": "Ribbon Synapse",
      "ID": 334
    }, {
      "LinkedStructures": "    20573 -> 86144    30908 -> 58639    30916 -> 58640    58594 -> 83129    84941 -> 84939    86491 -> 86492",
      "SourceStructureID": 6117,
      "TargetStructureID": 58592,
      "TargetID": 58592,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 7018
    }, {
      "LinkedStructures": "    11265 -> 15843    12374 -> 38155    11265 -> 15843    12374 -> 38155",
      "SourceStructureID": 9769,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8385
    }, {
      "LinkedStructures": "    23463 -> 23462    113076 -> 113075",
      "SourceStructureID": 5284,
      "TargetStructureID": 16073,
      "TargetID": 16073,
      "SourceID": 5284,
      "Type": "Ribbon Synapse",
      "ID": 3700
    }, {
      "LinkedStructures": "    23958 -> 54696",
      "SourceStructureID": 9769,
      "TargetStructureID": 54695,
      "TargetID": 54695,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8422
    }, {
      "LinkedStructures": "    74355 -> 74354    74355 -> 74354",
      "SourceStructureID": 5442,
      "TargetStructureID": 74047,
      "TargetID": 74047,
      "SourceID": 5442,
      "Type": "Unknown",
      "ID": 4005
    }, {
      "LinkedStructures": "    29846 -> 29847    29846 -> 29847",
      "SourceStructureID": 9769,
      "TargetStructureID": 6857,
      "TargetID": 6857,
      "SourceID": 9769,
      "Type": "Conventional",
      "ID": 8381
    }, {
      "LinkedStructures": "    83138 -> 83141",
      "SourceStructureID": 6117,
      "TargetStructureID": 70469,
      "TargetID": 70469,
      "SourceID": 6117,
      "Type": "Adherens",
      "ID": 7037
    }, {
      "LinkedStructures": "    20138 -> 59152    20138 -> 59152",
      "SourceStructureID": 20136,
      "TargetStructureID": 59145,
      "TargetID": 59145,
      "SourceID": 20136,
      "Type": "BC Conventional Synapse",
      "ID": 8985
    }, {
      "LinkedStructures": "    97941 -> 97942    114285 -> 114287    97941 -> 97942    114285 -> 114287",
      "SourceStructureID": 5278,
      "TargetStructureID": 15796,
      "TargetID": 15796,
      "SourceID": 5278,
      "Type": "Unknown",
      "ID": 3289
    }, {
      "LinkedStructures": "    10717 -> 25096    83914 -> 83915",
      "SourceStructureID": 6117,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 6996
    }, {
      "LinkedStructures": "    44367 -> 88042",
      "SourceStructureID": 44346,
      "TargetStructureID": 87972,
      "TargetID": 87972,
      "SourceID": 44346,
      "Type": "Adherens",
      "ID": 10628
    }, {
      "LinkedStructures": "    115867 -> 59146    115867 -> 59146",
      "SourceStructureID": 909,
      "TargetStructureID": 59145,
      "TargetID": 59145,
      "SourceID": 909,
      "Type": "BC Conventional Synapse",
      "ID": 2585
    }, {
      "LinkedStructures": "    94504 -> 94503    94504 -> 94503",
      "SourceStructureID": 4569,
      "TargetStructureID": 324,
      "TargetID": 324,
      "SourceID": 4569,
      "Type": "Unknown",
      "ID": 3046
    }, {
      "LinkedStructures": "    51174 -> 51175",
      "SourceStructureID": 44970,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 44970,
      "Type": "Gap Junction",
      "ID": 10634
    }, {
      "LinkedStructures": "    93541 -> 93540    93541 -> 93540    94103 -> 94102    94103 -> 94102    94544 -> 94543    94544 -> 94543    96381 -> 96380    96381 -> 96380    96391 -> 96392    96391 -> 96392",
      "SourceStructureID": 372,
      "TargetStructureID": 324,
      "TargetID": 324,
      "SourceID": 372,
      "Type": "Unknown",
      "ID": 933
    }, {
      "LinkedStructures": "    52688 -> 60254",
      "SourceStructureID": 428,
      "TargetStructureID": 8720,
      "TargetID": 8720,
      "SourceID": 428,
      "Type": "Ribbon Synapse",
      "ID": 1093
    }, {
      "LinkedStructures": "    11208 -> 104215    11208 -> 104215",
      "SourceStructureID": 5278,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 5278,
      "Type": "Ribbon Synapse",
      "ID": 3281
    }, {
      "LinkedStructures": "    43862 -> 43491    43862 -> 43491",
      "SourceStructureID": 3116,
      "TargetStructureID": 5107,
      "TargetID": 5107,
      "SourceID": 3116,
      "Type": "Ribbon Synapse",
      "ID": 2913
    }, {
      "LinkedStructures": "    58641 -> 58643",
      "SourceStructureID": 58592,
      "TargetStructureID": 58642,
      "TargetID": 58642,
      "SourceID": 58592,
      "Type": "Conventional",
      "ID": 11117
    }, {
      "LinkedStructures": "    14238 -> 55281",
      "SourceStructureID": 327,
      "TargetStructureID": 8575,
      "TargetID": 8575,
      "SourceID": 327,
      "Type": "BC Conventional Synapse",
      "ID": 794
    }, {
      "LinkedStructures": "    50031 -> 7669    50078 -> 7671    50031 -> 7669    50078 -> 7671",
      "SourceStructureID": 5516,
      "TargetStructureID": 7594,
      "TargetID": 7594,
      "SourceID": 5516,
      "Type": "Ribbon Synapse",
      "ID": 4321
    }, {
      "LinkedStructures": "    6967 -> 6968    10053 -> 10052    10056 -> 10055    10714 -> 10709    10715 -> 10708    10717 -> 10706    12318 -> 12319    30887 -> 10713    51295 -> 51294    51326 -> 51327    51334 -> 51335    51530 -> 51368    51546 -> 10718",
      "SourceStructureID": 6117,
      "TargetStructureID": 606,
      "TargetID": 606,
      "SourceID": 6117,
      "Type": "Ribbon Synapse",
      "ID": 6984
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
    }],
    "node_attributes": [{
      "DisplayName": "id",
      "Name": "ID",
      "DataType": "index",
      "DatabaseName": "id",
      "Unique": "true",
      "Type": "int"
    }, {
      "DisplayName": "label",
      "Name": "Label",
      "DataType": "categorical",
      "DatabaseName": "label",
      "Unique": "false",
      "Type": "string"
    }, {
      "DisplayName": "structure uri",
      "Name": "Structure",
      "DataType": "id",
      "DatabaseName": "structure",
      "Unique": "true",
      "Type": "string"
    }, {
      "DisplayName": "structure id",
      "Name": "StructureID",
      "DataType": "id",
      "DatabaseName": "id",
      "Unique": "true",
      "Type": "int"
    }, {
      "DisplayName": "area",
      "Name": "HullArea",
      "DataType": "quantitative",
      "DatabaseName": "hull",
      "Unique": "false",
      "Type": "float"
    }, {
      "DisplayName": "locations",
      "Name": "Locations",
      "DataType": "quantitative",
      "DatabaseName": "locations",
      "Unique": "false",
      "Type": "int"
    }]
  },
  "matrix": {
    "source_ids": [1724, 5279, 5517, 6117, 142, 168, 170, 176, 299, 307, 324, 372, 408, 431, 4569, 5284, 5513],
    "matrix": [[[[1724, 2777, 1724, 2783, 15796], [1724, 2786, 26079, 9410, 15796], [1724, 2783, 15796], [1724, 2780, 5279, 3515, 15796], [1724, 2779, 5278, 3289, 15796]], [[1724, 2777, 1724, 2782, 7594], [1724, 2782, 7594]], [[1724, 2777, 1724, 2778, 5107], [1724, 2780, 5279, 3503, 5107], [1724, 2779, 5278, 3281, 5107], [1724, 2778, 5107]], [[1724, 2786, 26079, 9414, 47013]], [[1724, 2784, 21299, 9209, 87972], [1724, 2778, 5107, 3266, 87972]], [[1724, 2784, 21299, 9206, 44346]], [[1724, 2784, 21299, 9198, 8575], [1724, 2779, 5278, 3286, 8575], [1724, 2776, 1637, 2760, 8575]], [[1724, 2782, 7594, 8130, 606]], [[1724, 2780, 5279, 3525, 61836], [1724, 2778, 5107, 3264, 61836]], [[1724, 2780, 5279, 3512, 6857]], [[1724, 2779, 5278, 3299, 68539]], [[1724, 2776, 1637, 2764, 22974]], [[1724, 2775, 514, 1962, 5150]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], [[[5279, 3505, 5279, 3515, 15796], [5279, 3526, 66395, 12004, 15796], [5279, 3516, 20136, 8976, 15796], [5279, 3515, 15796], [5279, 3510, 6117, 6998, 15796], [5279, 3504, 5278, 3289, 15796], [5279, 3500, 909, 2577, 15796]], [[5279, 3518, 39957, 10396, 7594], [5279, 3516, 20136, 8974, 7594], [5279, 3510, 6117, 6996, 7594], [5279, 3509, 5517, 4337, 7594], [5279, 3500, 909, 2574, 7594]], [[5279, 3505, 5279, 3503, 5107], [5279, 3504, 5278, 3281, 5107], [5279, 3503, 5107]], [], [[5279, 3509, 5517, 4350, 87972], [5279, 3503, 5107, 3266, 87972]], [], [[5279, 3504, 5278, 3286, 8575], [5279, 3501, 1637, 2760, 8575], [5279, 3500, 909, 2575, 8575]], [[5279, 3533, 88565, 15241, 606], [5279, 3518, 39957, 10394, 606], [5279, 3510, 6117, 6984, 606]], [[5279, 3505, 5279, 3525, 61836], [5279, 3525, 61836], [5279, 3503, 5107, 3264, 61836]], [[5279, 3505, 5279, 3512, 6857], [5279, 3512, 6857]], [[5279, 3510, 6117, 7033, 68539], [5279, 3504, 5278, 3299, 68539]], [[5279, 3527, 66523, 12048, 22974], [5279, 3501, 1637, 2764, 22974]], [[5279, 3502, 3679, 2960, 5150], [5279, 3499, 514, 1962, 5150]], [[5279, 3527, 66523, 12047, 16087]], [[5279, 3525, 61836, 11498, 45574]], [[5279, 3522, 58592, 11117, 58642]], [[5279, 3516, 20136, 8988, 69162], [5279, 3500, 909, 2596, 69162]], [[5279, 3516, 20136, 8986, 67663], [5279, 3500, 909, 2594, 67663]], [[5279, 3516, 20136, 8985, 59145], [5279, 3500, 909, 2585, 59145]], [[5279, 3516, 20136, 8982, 53399]], [[5279, 3513, 8579, 8270, 8580]], [[5279, 3513, 8579, 8273, 61864]], [[5279, 3511, 6169, 7696, 12203]], [[5279, 3511, 6169, 7694, 9787]], [[5279, 3510, 6117, 7023, 58741]], [[5279, 3510, 6117, 7029, 59008]], [[5279, 3500, 909, 2590, 62578]], [[5279, 3500, 909, 2587, 61439]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], [[[5517, 4342, 26079, 9410, 15796], [5517, 4341, 20136, 8976, 15796], [5517, 4329, 909, 2577, 15796]], [[5517, 4341, 20136, 8974, 7594], [5517, 4337, 7594], [5517, 4335, 5516, 4321, 7594], [5517, 4334, 5513, 4288, 7594], [5517, 4332, 2610, 2897, 7594], [5517, 4329, 909, 2574, 7594]], [[5517, 4350, 87972, 15167, 5107]], [[5517, 4342, 26079, 9414, 47013]], [[5517, 4350, 87972], [5517, 4350, 87972, 15169, 87972]], [[5517, 4350, 87972, 15168, 44346]], [[5517, 4340, 19203, 8942, 8575], [5517, 4331, 1637, 2760, 8575], [5517, 4329, 909, 2575, 8575]], [[5517, 4337, 7594, 8130, 606], [5517, 4336, 5561, 4966, 606], [5517, 4334, 5513, 4283, 606], [5517, 4328, 598, 2488, 606]], [], [], [], [[5517, 4331, 1637, 2764, 22974]], [[5517, 4327, 514, 1962, 5150]], [], [], [[5517, 4347, 58592, 11117, 58642]], [[5517, 4341, 20136, 8988, 69162], [5517, 4335, 5516, 4325, 69162], [5517, 4329, 909, 2596, 69162]], [[5517, 4341, 20136, 8986, 67663], [5517, 4329, 909, 2594, 67663]], [[5517, 4341, 20136, 8985, 59145], [5517, 4329, 909, 2585, 59145]], [[5517, 4341, 20136, 8982, 53399], [5517, 4336, 5561, 4978, 53399]], [], [], [], [], [], [], [[5517, 4329, 909, 2590, 62578]], [[5517, 4329, 909, 2587, 61439]], [[5517, 4339, 18693, 8934, 64777]], [[5517, 4336, 5561, 4979, 63594]], [[5517, 4335, 5516, 4324, 68153]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], [[[6117, 7006, 35975, 10121, 15796], [6117, 7000, 20136, 8976, 15796], [6117, 6998, 15796], [6117, 6997, 9769, 8385, 15796], [6117, 6989, 5292, 3746, 15796], [6117, 6988, 5279, 3515, 15796], [6117, 6987, 4877, 3208, 15796]], [[6117, 7007, 39957, 10396, 7594], [6117, 7003, 35240, 9987, 7594], [6117, 7000, 20136, 8974, 7594], [6117, 6997, 9769, 8383, 7594], [6117, 6996, 7594], [6117, 6993, 5650, 6103, 7594], [6117, 6992, 5601, 5688, 7594], [6117, 6984, 606, 2512, 7594], [6117, 7202, 86582, 14991, 7594]], [[6117, 6997, 9769, 8372, 5107], [6117, 6988, 5279, 3503, 5107]], [], [], [[6117, 6987, 4877, 3211, 44346], [6117, 6983, 595, 2472, 44346]], [], [[6117, 7016, 55517, 11030, 606], [6117, 7013, 54078, 10941, 606], [6117, 7011, 45220, 10637, 606], [6117, 7008, 40039, 10419, 606], [6117, 7007, 39957, 10394, 606], [6117, 7003, 35240, 9977, 606], [6117, 6997, 9769, 8371, 606], [6117, 6996, 7594, 8130, 606], [6117, 6993, 5650, 6092, 606], [6117, 6992, 5601, 5678, 606], [6117, 6989, 5292, 3734, 606], [6117, 6984, 606], [6117, 6984, 606, 2499, 606], [6117, 6983, 595, 2462, 606], [6117, 7030, 59482, 11231, 606], [6117, 7035, 70454, 12831, 606], [6117, 7037, 70469, 12843, 606]], [[6117, 6988, 5279, 3525, 61836]], [[6117, 6997, 9769, 8381, 6857], [6117, 6988, 5279, 3512, 6857]], [[6117, 6989, 5292, 3756, 68539], [6117, 7033, 68539]], [[6117, 7032, 66523, 12048, 22974], [6117, 7033, 68539, 12561, 22974]], [[6117, 6986, 3679, 2960, 5150]], [[6117, 7032, 66523, 12047, 16087]], [], [[6117, 7018, 58592, 11117, 58642], [6117, 6987, 4877, 3217, 58642]], [[6117, 7000, 20136, 8988, 69162]], [[6117, 7000, 20136, 8986, 67663]], [[6117, 7000, 20136, 8985, 59145]], [[6117, 7000, 20136, 8982, 53399], [6117, 6997, 9769, 8410, 53399]], [], [], [[6117, 6994, 6169, 7696, 12203]], [[6117, 6994, 6169, 7694, 9787], [6117, 6985, 3257, 2939, 9787]], [[6117, 7023, 58741]], [[6117, 7016, 55517, 11037, 59008], [6117, 7029, 59008]], [], [], [[6117, 6999, 18693, 8934, 64777]], [], [], [[6117, 6997, 9769, 8397, 50982]], [[6117, 6997, 9769, 8399, 52882]], [[6117, 6997, 9769, 8414, 53436]], [[6117, 6997, 9769, 8422, 54695]], [[6117, 6997, 9769, 8423, 54701], [6117, 6987, 4877, 3212, 54701]], [[6117, 6997, 9769, 8438, 74047]], [[6117, 6992, 5601, 5691, 23870]], [[6117, 6990, 5377, 3889, 5118]], [[6117, 6984, 606, 2515, 12408]], [], [], [], [], [], [], [], [], []], [[[142, 27, 5292, 3746, 15796], [142, 26, 5278, 3289, 15796]], [], [[142, 41, 87972, 15167, 5107], [142, 26, 5278, 3281, 5107]], [], [[142, 23, 142, 41, 87972], [142, 41, 87972], [142, 41, 87972, 15169, 87972], [142, 38, 44346, 10628, 87972], [142, 32, 21299, 9209, 87972]], [[142, 23, 142, 38, 44346], [142, 43, 88055, 15177, 44346], [142, 41, 87972, 15168, 44346], [142, 38, 44346], [142, 32, 21299, 9206, 44346]], [[142, 32, 21299, 9198, 8575], [142, 28, 5297, 3789, 8575], [142, 26, 5278, 3286, 8575]], [[142, 27, 5292, 3734, 606]], [], [], [[142, 39, 72879, 13160, 68539], [142, 28, 5297, 3802, 68539], [142, 27, 5292, 3756, 68539], [142, 26, 5278, 3299, 68539]], [[142, 28, 5297, 3793, 22974]], [[142, 25, 3679, 2960, 5150]], [], [], [], [], [], [], [], [], [], [[142, 30, 6169, 7696, 12203]], [[142, 30, 6169, 7694, 9787], [142, 24, 3257, 2939, 9787]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], [[[168, 124, 3116, 2916, 15796]], [[168, 122, 606, 2512, 7594]], [[168, 124, 3116, 2913, 5107]], [], [[168, 136, 44346, 10628, 87972], [168, 133, 21299, 9209, 87972]], [[168, 118, 168, 136, 44346], [168, 136, 44346], [168, 133, 21299, 9206, 44346], [168, 121, 595, 2472, 44346]], [[168, 133, 21299, 9198, 8575], [168, 132, 8720, 8293, 8575]], [[168, 118, 168, 122, 606], [168, 126, 4569, 3050, 606], [168, 124, 3116, 2909, 606], [168, 122, 606], [168, 122, 606, 2499, 606], [168, 121, 595, 2462, 606], [168, 120, 176, 334, 606], [168, 119, 170, 163, 606]], [], [], [[168, 124, 3116, 2918, 68539]], [], [], [], [], [], [], [], [], [], [], [], [], [[168, 127, 4835, 3178, 9787], [168, 125, 3257, 2939, 9787]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[168, 122, 606, 2515, 12408]], [[168, 118, 168, 132, 8720], [168, 132, 8720]], [[168, 123, 906, 2559, 122467]], [[168, 120, 176, 350, 44970]], [], [], [], [], [], []], [[[170, 169, 9769, 8385, 15796], [170, 164, 3116, 2916, 15796]], [[170, 169, 9769, 8383, 7594], [170, 167, 5530, 4528, 7594], [170, 163, 606, 2512, 7594]], [[170, 169, 9769, 8372, 5107], [170, 164, 3116, 2913, 5107]], [], [], [[170, 162, 595, 2472, 44346]], [[170, 160, 428, 1092, 8575]], [[170, 157, 170, 163, 606], [170, 175, 35653, 10070, 606], [170, 169, 9769, 8371, 606], [170, 167, 5530, 4517, 606], [170, 166, 5481, 4065, 606], [170, 165, 4569, 3050, 606], [170, 164, 3116, 2909, 606], [170, 163, 606], [170, 163, 606, 2499, 606], [170, 162, 595, 2462, 606], [170, 160, 428, 1090, 606], [170, 158, 324, 732, 606]], [], [[170, 169, 9769, 8381, 6857]], [[170, 164, 3116, 2918, 68539]], [], [[170, 161, 476, 1254, 5150]], [], [], [], [], [], [], [[170, 169, 9769, 8410, 53399]], [], [], [], [], [], [], [], [], [[170, 170, 18693, 8934, 64777]], [], [], [[170, 169, 9769, 8397, 50982], [170, 158, 324, 742, 50982]], [[170, 169, 9769, 8399, 52882]], [[170, 169, 9769, 8414, 53436]], [[170, 169, 9769, 8422, 54695]], [[170, 169, 9769, 8423, 54701]], [[170, 169, 9769, 8438, 74047]], [], [], [[170, 163, 606, 2515, 12408]], [[170, 160, 428, 1093, 8720]], [], [], [[170, 168, 7564, 8114, 28950]], [[170, 161, 476, 1261, 46741]], [], [], [], []], [[[176, 342, 20327, 9176, 15796], [176, 340, 6117, 6998, 15796], [176, 338, 5531, 4681, 15796], [176, 335, 4877, 3208, 15796]], [[176, 340, 6117, 6996, 7594], [176, 337, 5530, 4528, 7594], [176, 334, 606, 2512, 7594]], [], [], [], [[176, 350, 44970, 10635, 44346], [176, 349, 44912, 10632, 44346], [176, 338, 5531, 4683, 44346], [176, 335, 4877, 3211, 44346]], [[176, 338, 5531, 4680, 8575]], [[176, 356, 88260, 15201, 606], [176, 351, 45220, 10637, 606], [176, 350, 44970, 10634, 606], [176, 340, 6117, 6984, 606], [176, 338, 5531, 4667, 606], [176, 337, 5530, 4517, 606], [176, 334, 606], [176, 334, 606, 2499, 606]], [], [], [[176, 340, 6117, 7033, 68539]], [], [], [], [], [[176, 335, 4877, 3217, 58642]], [], [], [], [], [], [], [], [], [[176, 340, 6117, 7023, 58741]], [[176, 340, 6117, 7029, 59008]], [], [], [], [], [], [], [], [], [], [[176, 335, 4877, 3212, 54701]], [], [], [[176, 338, 5531, 4668, 5118]], [[176, 334, 606, 2515, 12408]], [], [], [[176, 350, 44970]], [], [], [], [], [], []], [[], [], [[299, 658, 5107]], [[299, 660, 47013]], [[299, 658, 5107, 3266, 87972]], [], [], [[299, 660, 47013, 10780, 606]], [[299, 658, 5107, 3264, 61836]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[299, 655, 298, 652, 8720]], [], [], [], [], [], [], [], []], [[[307, 675, 9769, 8385, 15796]], [[307, 673, 5513, 4288, 7594], [307, 674, 7594], [307, 675, 9769, 8383, 7594]], [[307, 675, 9769, 8372, 5107]], [], [], [], [], [[307, 673, 5513, 4283, 606], [307, 674, 7594, 8130, 606], [307, 675, 9769, 8371, 606], [307, 676, 24303, 9291, 606], [307, 678, 38632, 10243, 606]], [], [[307, 675, 9769, 8381, 6857]], [], [], [], [], [], [], [], [], [], [[307, 675, 9769, 8410, 53399]], [], [], [], [], [], [], [], [], [], [], [], [[307, 675, 9769, 8397, 50982]], [[307, 675, 9769, 8399, 52882]], [[307, 675, 9769, 8414, 53436]], [[307, 675, 9769, 8422, 54695]], [[307, 675, 9769, 8423, 54701]], [[307, 675, 9769, 8438, 74047]], [], [], [], [], [[307, 672, 906, 2559, 122467]], [], [], [], [], [], [], []], [[[324, 736, 9769, 8385, 15796], [324, 733, 3116, 2916, 15796]], [[324, 736, 9769, 8383, 7594], [324, 732, 606, 2512, 7594], [324, 725, 307, 674, 7594]], [[324, 743, 55403, 11020, 5107], [324, 736, 9769, 8372, 5107], [324, 733, 3116, 2913, 5107]], [], [], [], [[324, 730, 428, 1092, 8575]], [[324, 727, 324, 732, 606], [324, 744, 55517, 11030, 606], [324, 743, 55403, 11018, 606], [324, 741, 38632, 10243, 606], [324, 736, 9769, 8371, 606], [324, 733, 3116, 2909, 606], [324, 732, 606], [324, 732, 606, 2499, 606], [324, 730, 428, 1090, 606], [324, 729, 372, 939, 606], [324, 723, 170, 163, 606]], [], [[324, 736, 9769, 8381, 6857]], [[324, 733, 3116, 2918, 68539]], [], [[324, 735, 6153, 7454, 5150], [324, 731, 476, 1254, 5150]], [], [], [], [], [], [], [[324, 736, 9769, 8410, 53399]], [], [], [], [[324, 734, 4835, 3178, 9787]], [], [[324, 744, 55517, 11037, 59008]], [], [], [], [], [], [[324, 727, 324, 742, 50982], [324, 742, 50982], [324, 736, 9769, 8397, 50982]], [[324, 736, 9769, 8399, 52882]], [[324, 736, 9769, 8414, 53436]], [[324, 736, 9769, 8422, 54695]], [[324, 736, 9769, 8423, 54701]], [[324, 736, 9769, 8438, 74047]], [], [], [[324, 732, 606, 2515, 12408]], [[324, 730, 428, 1093, 8720]], [], [], [], [[324, 731, 476, 1261, 46741]], [[324, 743, 55403, 11022, 31024]], [], [], []], [[[372, 940, 3116, 2916, 15796]], [[372, 939, 606, 2512, 7594]], [[372, 940, 3116, 2913, 5107]], [], [], [], [[372, 938, 479, 1280, 8575], [372, 937, 428, 1092, 8575]], [[372, 945, 59499, 11234, 606], [372, 944, 38632, 10243, 606], [372, 940, 3116, 2909, 606], [372, 939, 606], [372, 939, 606, 2499, 606], [372, 937, 428, 1090, 606], [372, 934, 366, 917, 606], [372, 933, 324, 732, 606]], [], [], [[372, 940, 3116, 2918, 68539]], [], [[372, 941, 6153, 7454, 5150]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[372, 933, 324, 742, 50982]], [], [], [], [], [], [], [], [[372, 939, 606, 2515, 12408]], [[372, 937, 428, 1093, 8720]], [], [], [], [], [], [], [], []], [[[408, 1010, 24401, 9308, 15796]], [[408, 1003, 307, 674, 7594], [408, 1008, 6155, 7468, 7594], [408, 1012, 28886, 9432, 7594]], [], [[408, 1019, 47013]], [], [], [[408, 1006, 479, 1280, 8575], [408, 1010, 24401, 9306, 8575], [408, 1020, 61587, 11434, 8575]], [[408, 1007, 598, 2488, 606], [408, 1009, 24303, 9291, 606], [408, 1019, 47013, 10780, 606]], [], [], [], [[408, 1010, 24401, 9310, 22974]], [], [], [], [], [], [], [], [], [], [[408, 1010, 24401, 9315, 61864]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[408, 1008, 6155, 7469, 8720]], [], [], [], [], [], [], [], []], [[], [], [[431, 1105, 327, 791, 5107]], [], [], [[431, 1108, 440, 1147, 44346]], [[431, 1105, 327, 794, 8575], [431, 1107, 428, 1092, 8575], [431, 1108, 440, 1141, 8575], [431, 1111, 8720, 8293, 8575]], [[431, 1104, 277, 600, 606], [431, 1107, 428, 1090, 606], [431, 1117, 34868, 9910, 606]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[431, 1109, 4835, 3178, 9787], [431, 1110, 7157, 8033, 9787]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[431, 1107, 428, 1093, 8720], [431, 1111, 8720], [431, 1119, 60264, 11338, 8720]], [], [], [], [], [], [[431, 1108, 440, 1144, 33161]], [], []], [[[4569, 3051, 3116, 2916, 15796]], [[4569, 3050, 606, 2512, 7594]], [[4569, 3051, 3116, 2913, 5107]], [], [[4569, 3058, 21299, 9209, 87972]], [[4569, 3058, 21299, 9206, 44346]], [[4569, 3058, 21299, 9198, 8575], [4569, 3048, 428, 1092, 8575]], [[4569, 3053, 4569, 3050, 606], [4569, 3051, 3116, 2909, 606], [4569, 3050, 606], [4569, 3050, 606, 2499, 606], [4569, 3048, 428, 1090, 606], [4569, 3046, 324, 732, 606], [4569, 3045, 170, 163, 606]], [], [], [[4569, 3051, 3116, 2918, 68539]], [], [[4569, 3049, 476, 1254, 5150]], [], [], [], [], [], [], [], [], [], [], [[4569, 3052, 3257, 2939, 9787]], [], [], [], [], [[4569, 3056, 18693, 8934, 64777]], [], [], [[4569, 3046, 324, 742, 50982]], [], [], [], [], [], [], [], [[4569, 3050, 606, 2515, 12408]], [[4569, 3048, 428, 1093, 8720]], [], [], [], [[4569, 3049, 476, 1261, 46741]], [], [], [], []], [[[5284, 3700, 16073, 8887, 15796], [5284, 3699, 9769, 8385, 15796], [5284, 3696, 6050, 6541, 15796], [5284, 3693, 5442, 4001, 15796], [5284, 3691, 5292, 3746, 15796], [5284, 3687, 909, 2577, 15796]], [[5284, 3699, 9769, 8383, 7594], [5284, 3687, 909, 2574, 7594]], [[5284, 3690, 5284, 3689, 5107], [5284, 3699, 9769, 8372, 5107], [5284, 3694, 5503, 4177, 5107], [5284, 3689, 5107]], [[5284, 3715, 69162, 12675, 47013]], [[5284, 3689, 5107, 3266, 87972], [5284, 3686, 142, 41, 87972]], [[5284, 3686, 142, 38, 44346]], [[5284, 3700, 16073, 8886, 8575], [5284, 3697, 7073, 7940, 8575], [5284, 3694, 5503, 4186, 8575], [5284, 3692, 5297, 3789, 8575], [5284, 3687, 909, 2575, 8575]], [[5284, 3705, 55517, 11030, 606], [5284, 3699, 9769, 8371, 606], [5284, 3694, 5503, 4176, 606], [5284, 3693, 5442, 3999, 606], [5284, 3691, 5292, 3734, 606]], [[5284, 3689, 5107, 3264, 61836]], [[5284, 3699, 9769, 8381, 6857]], [[5284, 3715, 69162, 12677, 68539], [5284, 3692, 5297, 3802, 68539], [5284, 3691, 5292, 3756, 68539]], [[5284, 3692, 5297, 3793, 22974]], [[5284, 3697, 7073, 7939, 5150], [5284, 3688, 3679, 2960, 5150]], [], [], [], [[5284, 3690, 5284, 3715, 69162], [5284, 3715, 69162], [5284, 3687, 909, 2596, 69162]], [[5284, 3687, 909, 2594, 67663]], [[5284, 3687, 909, 2585, 59145]], [[5284, 3699, 9769, 8410, 53399]], [], [], [], [], [], [[5284, 3705, 55517, 11037, 59008]], [[5284, 3687, 909, 2590, 62578]], [[5284, 3687, 909, 2587, 61439]], [], [], [[5284, 3690, 5284, 3713, 68153], [5284, 3713, 68153], [5284, 3711, 68093, 12440, 68153]], [[5284, 3699, 9769, 8397, 50982]], [[5284, 3699, 9769, 8399, 52882]], [[5284, 3699, 9769, 8414, 53436]], [[5284, 3699, 9769, 8422, 54695]], [[5284, 3699, 9769, 8423, 54701]], [[5284, 3699, 9769, 8438, 74047], [5284, 3693, 5442, 4005, 74047]], [[5284, 3693, 5442, 4002, 23870]], [], [], [], [], [], [], [], [[5284, 3695, 5562, 5051, 31024]], [], [[5284, 3713, 68153, 12448, 66958], [5284, 3695, 5562, 5060, 66958]], [[5284, 3697, 7073, 7942, 29340]]], [[], [[5513, 4283, 606, 2512, 7594], [5513, 4285, 2610, 2897, 7594]], [], [], [], [], [], [[5513, 4283, 606], [5513, 4283, 606, 2499, 606]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [[5513, 4283, 606, 2515, 12408]], [], [], [], [], [], [], [], [], []]],
    "target_ids": [15796, 7594, 5107, 47013, 87972, 44346, 8575, 606, 61836, 6857, 68539, 22974, 5150, 16087, 45574, 58642, 69162, 67663, 59145, 53399, 8580, 61864, 12203, 9787, 58741, 59008, 62578, 61439, 64777, 63594, 68153, 50982, 52882, 53436, 54695, 54701, 74047, 23870, 5118, 12408, 8720, 122467, 44970, 28950, 46741, 31024, 33161, 66958, 29340]
  }
};

export {mock};
