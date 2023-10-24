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
            return <b style={{ color: "red" }}>매우 나쁨!</b>;
        default:
            return <b>-</b>;
    }
}

function Mask({ mask }) {
    switch (mask) {
        case "1":
            // return <div className="value dust mask tail">좋음!</div>;
            return null;
        case "2":
            // return <div className="value dust mask tail">보통</div>;
            return null;
        case "3":
            return (
                <div className="value dust mask tail">
                    마스크를 쓰는 게 좋아 보여요
                </div>
            );
        case "4":
            return (
                <div className="value mask dust tail">마스크를 써야 해요</div>
            );
    }
}

function Dust({
    pm10val,
    pm10gr,
    pm25val,
    pm25gr,
    o3val,
    o3gr,
    coval,
    cogr,
    no2val,
    no2gr,
}) {
    return (
        <>
            <div className="Dust">
                <div className="col right">
                    <div className="value dust">
                        <div className="title tail">미세먼지 PM10</div>
                        {pm10val}μg/m³
                        <br />
                        <Grade grade={pm10gr} />
                    </div>
                    <div className="value dust">
                        <div className="title">오존</div>
                        {o3val}ppm
                        <br />
                        <Grade grade={o3gr} />
                    </div>
                    <div className="value dust">
                        <div className="title">이산화질소</div>
                        {no2val}ppm
                        <br />
                        <Grade grade={no2gr} />
                    </div>
                </div>
                <div className="col">
                    <div className="value dust">
                        <div className="title">초미세먼지 PM25</div>
                        {pm25val}μg/m³
                        <br />
                        <Grade grade={pm25gr} />
                    </div>
                    <div className="value dust">
                        <div className="title">일산화탄소</div>
                        {coval}ppm
                        <br />
                        <Grade grade={cogr} />
                    </div>
                </div>
            </div>
            <Mask mask={pm10gr} />
        </>
    );
}

export default Dust;
