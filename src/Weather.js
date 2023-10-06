import React from "react";

function Sky({ category, fcstValue }) {
    switch (fcstValue) {
        case "1":
            return <b style={{ color: "blue" }}>맑음</b>;
        case "3":
            return <b style={{ color: "orange" }}>구름많음</b>;
        case "4":
            return <b style={{ color: "red" }}>흐림</b>;
    }
}

function Pty({ category, fcstValue }) {
    switch (fcstValue) {
        case "0":
            return <div>날씨가 좋네요. 눈이나 비는 오지 않아요.</div>;
        case "1":
            return <div>비가 와요. 우산을 꼭 챙겨주세요!</div>;
        case "2":
            return (
                <div>
                    비 또는 눈이 와요. 쌀쌀하니 따뜻하게 입어요! 우산도 꼭
                    챙겨주세요!
                </div>
            );
        case "3":
            return <div>눈이 와요. 장갑을 꼭 챙기세요!</div>;
        case "4":
            return (
                <div>
                    소나기가 와요. 비가 언제 올지 모르니, 우산을 꼭 챙겨주세요!
                </div>
            );
    }
}

function Tmp({ fcstDate, fcstTime, category, fcstValue }) {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${
        today.getMonth() + 1
    }월 ${today.getDate()}일`;
    // console.log(id);
    return (
        <div className="Weather">
            <h3>날씨: </h3>
            <div className="date">예보일자 : {formattedDate}</div>
            <div className="date">예보시각 : {fcstTime}</div>
            <div>자료 : {category}</div>
            <div>기온 : {fcstValue}°C</div>
        </div>
    );
}

export { Sky, Pty, Tmp };
