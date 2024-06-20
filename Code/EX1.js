configuration();
{
    config("scripttype", "visual");
    config("robot.horstproto", "Horst600S6");
    config("tool", "Schmalz_EducationPackage");
    config("world", "Training_World");
    config("tcp.weight", "3.0");
    config("version", "2023.11");
    config("io.config.file", "Example_2_2.io");
    config("io.config.checksum", "fe1e0cb9");
}

move({
    "name": "Start Point",
    "moveType": "JOINT",
    "poseRelation": "ABSOLUTE",
    "anyConfiguration": false,
    "tool": "Schmalz_EducationPackage",
    "coordSystem": "Basis",
    "speed.ratio": 1.0,
    "target": {"joints": [-6.983905, 24.104841, -35.153091, -0.659149, 102.499781, -228.694185]}
});
folder( "Cutting_Tool-Init" )
{
    outputLiteral( "TOOL_SPECIAL_IO_1", 1.0 );
    outputLiteral( "TOOL_SPECIAL_IO_2", 1.0 );
    folder( "Start_CT" )
    {
        outputLiteral( "TOOL_SPECIAL_IO_1", 0.0 );
        sleep( 100 );
        outputLiteral( "TOOL_SPECIAL_IO_1", 1.0 );
    }
}
for (i = 0; forTest(i, 2); ++i )
{
    move({
        "name": "Corner_1",
        "moveType": "LINEAR",
        "poseRelation": "ABSOLUTE",
        "anyConfiguration": false,
        "tool": "Schmalz_EducationPackage",
        "coordSystem": "Basis",
        "speed.ratio": 0.5,
        "target": {"joints": [-16.745318, 67.456886, 6.107958, -2.301258, 15.753795, -268.633431]}
    });
    move({
        "name": "Corner_2",
        "moveType": "LINEAR",
        "poseRelation": "ABSOLUTE",
        "anyConfiguration": false,
        "tool": "Schmalz_EducationPackage",
        "coordSystem": "Basis",
        "speed.ratio": 0.2,
        "target": {"joints": [-11.231999, 84.835358, -46.510013, -0.885194, 51.047783, -264.778500]}
    });
    move({
        "name": "Corner_3",
        "moveType": "LINEAR",
        "poseRelation": "ABSOLUTE",
        "anyConfiguration": false,
        "tool": "Schmalz_EducationPackage",
        "coordSystem": "Basis",
        "speed.ratio": 0.2,
        "target": {"joints": [-23.787024, 95.622888, -71.865131, -0.587959, 65.478604, -277.645802]}
    });
    move({
        "name": "Corner_4",
        "moveType": "LINEAR",
        "poseRelation": "ABSOLUTE",
        "anyConfiguration": false,
        "tool": "Schmalz_EducationPackage",
        "coordSystem": "Basis",
        "speed.ratio": 0.2,
        "target": {"joints": [-34.011638, 70.583363, -6.389903, -0.925793, 24.961821, -287.274439]}
    });
    move({
        "name": "Corner_5",
        "moveType": "LINEAR",
        "poseRelation": "ABSOLUTE",
        "anyConfiguration": false,
        "tool": "Schmalz_EducationPackage",
        "coordSystem": "Basis",
        "speed.ratio": 0.2,
        "target": {"joints": [-16.880618, 67.293896, 6.897073, -2.388067, 15.126658, -268.678219]}
    });
}
move({
    "name": "End Point",
    "moveType": "JOINT",
    "poseRelation": "ABSOLUTE",
    "anyConfiguration": false,
    "tool": "Schmalz_EducationPackage",
    "coordSystem": "Basis",
    "speed.ratio": 1.0,
    "target": {"joints": [-6.942527, 22.793737, -33.237310, -0.739092, 99.869104, -261.176596]}
});
folder( "Stop_CT" )
{
    outputLiteral( "TOOL_SPECIAL_IO_2", 0.0 );
    sleep( 100 );
    outputLiteral( "TOOL_SPECIAL_IO_2", 1.0 );
}
