import React from "react";

function Grade({ grade }) {
    switch (grade) {
        case "1":
            return <b style={{ color: "blue" }}>좋음!</b>;
        case "2":
            return <b style={{ color: "green" }}>보통</b>;
        case "3":
            return <b style={{ color: "orange" }}>나쁨!</b>;
        case "4":
            return <b style={{ color: "red" }}>매우 나쁨!!</b>;
    }
}

function Mask({ val }) {
    switch (val) {
        case "1":
            <div className="value dust">마스크를 쓰는 게 좋아 보여요</div>;
        case "2":
            <div className="value dust">마스크를 쓰는 게 좋아 보여요</div>;
        case "3":
            return <div>마스크를 쓰는 게 좋아 보여요</div>;
        case "4":
            return <div>마스크를 써야 해요</div>;
    }
}

function Dust({ pm10val, pm10gr, o3val, o3gr, coval, cogr, no2val, no2gr }) {
    return (
        <div className="Dust">
            <div className="row">
                <div className="value dust">
                    <div className="title">미세먼지 PM10</div>
                    <b>{pm10val}</b>μg/m³
                    <br />
                    grade: <Grade grade={pm10gr} />
                </div>
                <div className="value dust">
                    <div className="title">오존</div>
                    {o3val}ppm
                    <br />
                    <Grade grade={o3gr} />
                </div>
            </div>
            <div>
                <div className="value dust">
                    <div className="title">일산화탄소</div>
                    {coval}ppm
                    <br />
                    <Grade grade={cogr} />
                </div>
                <div className="value dust">
                    <div className="title">이산화질소</div>
                    {no2val}ppm
                    <br />
                    <Grade grade={no2gr} />
                </div>
            </div>
            <Mask val={pm10gr} />
        </div>
    );
}

export default Dust;
