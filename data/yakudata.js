/**
 * Created by pekko1215 on 2017/07/15.
 */
var YakuData = [];

YakuData.push({
    name: "はずれ",
    pay: [0, 0, 0]
});

for (var i = 1; i <= 4; i++) {
    YakuData.push({
        name: "リプレイ",
        pay: [0, 3, 13]
    })
}

for (var i = 5; i <= 8; i++) {
    YakuData.push({
        name: "ベル",
        pay: [9, 0, 0]
    })
}
YakuData.push({
    name: "スイカ",
    pay: [3, 5, 0]
})

YakuData.push({
    name: "チェリー",
    pay: [3, 3, 0]
})

YakuData.push({
    name:"BIG",
    pay:[13,0,0]
})

YakuData.push({
    name:"REG",
    pay:[13,0,0]
})

YakuData.push({
    name:"BIG小役1",
    pay:[0,3,0]
})

YakuData.push({
    name:"BIG小役2",
    pay:[0,5,0]
})
for(var i=15;i<=18;i++){
    YakuData.push({
        name:"JACGAME",
        pay:[0,0,13]
    })
}

