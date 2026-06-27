player.onChat("haus", function () {
    blocks.fill(
    LOG_OAK,
    pos(-7, 0, -7),
    pos(7, 10, 7),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    pos(-7, 1, -7),
    pos(7, 3, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-6, 5, -6),
    pos(6, 9, 6),
    FillOperation.Replace
    )
    blocks.place(SPRUCE_DOOR, pos(-7, 0, 0))
})
