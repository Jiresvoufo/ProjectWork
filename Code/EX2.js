configuration();
{
    config("scripttype", "visual");
    config("robot.horstproto", "Horst600S6");
    config("tool", "Schunk EGP40NNB grip");
    config("world", "EducationPackage_L");
    config("tcp.weight", "3.0");
    config("version", "2023.11");
    config("io.config.file", "Example_1.io");
    config("io.config.checksum", "fe1e0cb9");
}

move({
    "name": "Start Point",
    "moveType": "JOINT",
    "poseRelation": "ABSOLUTE",
    "anyConfiguration": false,
    "tool": "Schunk EGP40NNB grip",
    "coordSystem": "Basis",
    "speed.ratio": 1.0,
    "target": {"joints": [24.824643, 48.174299, 15.945766, 3.941163, 28.227956, -17.945081]}
});
folder( "Gripper_Initialisation" )
{
    outputLiteral( "TOOL_SPECIAL_IO_1", 1.0 );
    outputLiteral( "TOOL_SPECIAL_IO_2", 1.0 );
    folder( "Open_Gripper" )
    {
        outputLiteral( "TOOL_SPECIAL_IO_1", 0.0 );
        sleep( 100 );
        outputLiteral( "TOOL_SPECIAL_IO_1", 1.0 );
    }
}
for (i = 0; forTest(i, 16); ++i )
{
    palletDefinitionStart();
    {
        if ( pallet1 == undefined )
        {
            var pallet1 = createPallet("pallet1");
            pallet1.setPalletTool("Schunk EGP40NNB grip");
            pallet1.setPalletCoordSystem("Basis");
            pallet1.setMatrix(4,4);
            pallet1.setCornerPoint_1(0.36358153774910756, 0.1361941702875835, 0.04999339727467908, -0.008585237546723454, -0.049401419836813176, 0.9986480248191842, -0.013708243473006906);
            pallet1.setCornerPoint_2(0.36358225993771603, -0.15513995004353487, 0.049993313513939375, -0.008585240128245276, -0.049401412494626165, 0.9986480250276644, -0.01370825312801869);
            pallet1.setCornerPoint_3(0.24049206926060496, -0.1551407290010013, 0.04999298875818428, -0.0085855039663893, -0.049401335704407315, 0.9986480203945638, -0.01370870213706617);
            pallet1.setCornerPoint_4(0.24048999674036808, 0.13599999997568404, 0.04998999777712762, -0.008584360983584598, -0.049401682581964826, 0.998648087379392, -0.01370328712596949);
            pallet1.setApproachPoint("4", 0.36399999906533886, 0.13599999963162301, 0.09999999895778283, -0.008584357821500518, -0.049401683988032796, 0.9986480873612795, -0.013703285357802724);
            pallet1.setDepartPoint("4", 0.36399999906533886, 0.13599999963162301, 0.09999999895778283, -0.008584357821500518, -0.049401683988032796, 0.9986480873612795, -0.013703285357802724);
            pallet1.setStartPoint(1);
            pallet1.setCorrectionPoints();
        }
        noop();
        palletAction(pallet1, "MOVE_APPROACH", "JOINT", -1.000000, -1.000000, 1.000000, false, false);
        noop();
        palletAction(pallet1, "MOVE_PALLET", "LINEAR", -1.000000, -1.000000, 1.000000, false, false);
        outputLiteral( "TOOL_SPECIAL_IO_2", 0.0 );
        sleep( 100 );
        outputLiteral( "TOOL_SPECIAL_IO_2", 1.0 );
        palletAction(pallet1, "MOVE_DEPART", "LINEAR", -1.000000, -1.000000, 1.000000, false, true);
        move({
            "name": "Drop Spot",
            "moveType": "JOINT",
            "poseRelation": "ABSOLUTE",
            "anyConfiguration": false,
            "tool": "Schunk EGP40NNB grip",
            "coordSystem": "Basis",
            "speed.ratio": 1.0,
            "target": {"joints": [28.965660, 81.023693, -63.002376, 2.103641, 74.139910, -10.906260]}
        });
        outputLiteral( "TOOL_SPECIAL_IO_1", 0.0 );
        sleep( 100 );
        outputLiteral( "TOOL_SPECIAL_IO_1", 1.0 );
        if ( palletAction(pallet1, "IF_FINISHED") )
        {
            showInfo( "Pallet is finished (empty/full)!" );
        }
        palletDefinitionEnd();
    }
}
