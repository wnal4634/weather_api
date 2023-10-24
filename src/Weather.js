import React from "react";

function Sky({ fcstValue }) {
    switch (fcstValue) {
        case "1":
            return (
                <b
                    style={{ color: "cornflowerblue" }}
                    className="value weather"
                >
                    <div className="sky tail">하늘은</div>
                    맑음
                </b>
            );
        case "3":
            return (
                <b style={{ color: "slategray" }} className="value weather">
                    <div className="sky tail">하늘은</div>
                    구름많음
                </b>
            );
        case "4":
            return (
                <b style={{ color: "darkslateblue" }} className="value weather">
                    <div className="sky tail">하늘은</div>
                    흐림
                </b>
            );
    }
}

function Pty({ fcstValue }) {
    switch (fcstValue) {
        case "0":
            return (
                <div className="value weather">
                    <div className="title tail">무엇을 챙기는 게 좋을까?</div>
                    날씨가 좋아 우산은 필요 없어요. 눈 또는 비가 오지 않아요. ☀
                </div>
            );
        case "1":
            return (
                <div className="value weather">
                    <div className="title tail">무엇을 챙기는 게 좋을까?</div>
                    비가 와요. 우산을 챙겨주세요! ☂
                </div>
            );
        case "2":
            return (
                <div className="value weather">
                    <div className="title tail">무엇을 챙기는 게 좋을까?</div>비
                    또는 눈이 와요. 우산을 챙겨주세요! ☂❄
                </div>
            );
        case "3":
            return (
                <div className="value weather">
                    <div className="title tail">무엇을 챙기는 게 좋을까?</div>
                    눈이 와요. 따뜻한 겉옷과 장갑을 챙기세요! ❄
                </div>
            );
        case "4":
            return (
                <div className="value weather">
                    <div className="title tail">무엇을 챙기는 게 좋을까?</div>
                    소나기가 와요. 비가 언제 올지 모르니, 우산을 챙겨주세요! ☂
                </div>
            );
    }
}

const recClothes = (val) => {
    if (val >= 28) {
        return <>민소매, 반팔, 반바지, 원피스</>;
    } else if (val >= 23) {
        return <>반팔, 얇은 셔츠, 반바지, 면바지</>;
    } else if (val >= 20) {
        return <>얇은 카디건, 긴팔, 면바지, 청바지</>;
    } else if (val >= 17) {
        return <>얇은 니트, 맨투맨, 카디건, 청바지</>;
    } else if (val >= 12) {
        return <>재킷, 카디건, 청바지, 면바지, 스타킹</>;
    } else if (val >= 9) {
        return <>재킷, 트렌치코트, 니트, 청바지, 스타킹</>;
    } else if (val >= 5) {
        return <>코트, 가죽 재킷, 히트텍, 니트, 레깅스</>;
    } else {
        return <>패딩, 두꺼운 코트, 목도리, 기모 제품</>;
    }
};

function Tmp({ fcstValue }) {
    return (
        <div className="Weather">
            <div className="value weather">
                <div className="title tail">기온</div>
                {fcstValue}°C
            </div>
            <div className="value weather rec">
                <div className="title">
                    이 날씨에는 이런 옷을 입으면 좋아요!
                </div>
                {recClothes(fcstValue)}
            </div>
        </div>
    );
}

export { Sky, Pty, Tmp };
