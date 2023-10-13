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

function Dust({
    date,
    pm10val,
    pm10gr,
    o3val,
    o3gr,
    coval,
    cogr,
    no2val,
    no2gr,
}) {
    return (
        <div className="Dust">
            {/* <div className="date value">
                미세먼지 측정일시
                <hr />
                {date}
            </div> */}
            <div className="value">
                미세먼지
                <hr />
                PM10 : <b>{pm10val}</b>μg/m³
                <br />
                grade: <Grade grade={pm10gr} />
            </div>
            <div className="value">
                <div>
                    오존
                    <br />
                    {o3val}ppm
                    <br />
                    <Grade grade={o3gr} />
                </div>
                <div>
                    일산화탄소
                    <br />
                    {coval}ppm
                    <br />
                    <Grade grade={cogr} />
                </div>
                <div>
                    이산화질소
                    <br />
                    {no2val}ppm
                    <br />
                    <Grade grade={no2gr} />
                </div>
            </div>
        </div>
    );
}

export default Dust;
