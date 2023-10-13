import React from "react";

function Sky({ fcstValue }) {
    switch (fcstValue) {
        case "1":
            return (
                <div style={{ color: "blue" }} className="value">
                    맑음
                </div>
            );
        case "3":
            return (
                <div style={{ color: "orange" }} className="value">
                    구름많음
                </div>
            );
        case "4":
            return (
                <div style={{ color: "red" }} className="value">
                    흐림
                </div>
            );
    }
}

function Pty({ fcstValue }) {
    switch (fcstValue) {
        case "0":
            return (
                <div className="value">
                    날씨가 좋네요. 눈이나 비는 오지 않아요. ☀
                </div>
            );
        case "1":
            return (
                <div className="value">비가 와요. 우산을 꼭 챙겨주세요! ☂</div>
            );
        case "2":
            return (
                <div className="value">
                    비 또는 눈이 와요. 쌀쌀하니 따뜻하게 입어요! 우산도 꼭
                    챙겨주세요! ☂❄
                </div>
            );
        case "3":
            return (
                <div className="value">눈이 와요. 장갑을 꼭 챙기세요! ❄</div>
            );
        case "4":
            return (
                <div className="value">
                    소나기가 와요. 비가 언제 올지 모르니, 우산을 꼭 챙겨주세요!
                    ☂
                </div>
            );
    }
}

function Tmp({ fcstValue }) {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${
        today.getMonth() + 1
    }월 ${today.getDate()}일`;
    // console.log(id);
    return (
        <div className="Weather">
            {/* <div className="date value">
                날씨 예보일자
                <br />
                {formattedDate}
            </div> */}
            <div className="value">
                기온
                <br />
                {fcstValue}°C
            </div>
        </div>
    );
}

export { Sky, Pty, Tmp };
