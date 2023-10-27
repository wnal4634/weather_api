import React, { useEffect, useState } from "react";
import Dust from "Dust";
import { Tmp, Sky, Pty } from "Weather";
import axios from "axios";
import moment from "moment/moment";
import Seoul from "Seoul";
import License from "License";

const Air = (props) => {
    const [loading, setLoading] = useState(true);
    const [tmp, setTmp] = useState([]);
    const [sky, setSky] = useState([]);
    const [pty, setPty] = useState([]);
    const [dust, setDust] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const today = moment().format("YYYYMMDD");
    const time = moment().format("HHmm");
    const base_time_list = [
        "0200",
        "0500",
        "0800",
        "1100",
        "1400",
        "1700",
        "2000",
        "2300",
    ];
    const [baseTime, setBaseTime] = useState([]);
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [si, setSi] = useState("");

    const weatherUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&base_date=${today}&base_time=${baseTime}&nx=${x}&ny=${y}&dataType=json`;
    const dustUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${si}&dataTerm=daily&pageNo=1&numOfRows=1&returnType=json&serviceKey=${API_KEY}&ver=1.33`;

    useEffect(() => {
        //현재 시간에 따라 날씨 정보를 주는 가장 가까운 basetime 지정. API URL에 사용.
        if (Number(time) > 2310) {
            setBaseTime(base_time_list[7]);
        } else if (Number(time) > 2010) {
            setBaseTime(base_time_list[6]);
        } else if (Number(time) > 1710) {
            setBaseTime(base_time_list[5]);
        } else if (Number(time) > 1410) {
            setBaseTime(base_time_list[4]);
        } else if (Number(time) > 1110) {
            setBaseTime(base_time_list[3]);
        } else if (Number(time) > 810) {
            setBaseTime(base_time_list[2]);
        } else if (Number(time) > 510) {
            setBaseTime(base_time_list[1]);
        } else if (Number(time) > 210) {
            setBaseTime(base_time_list[0]);
        }

        axios //HTTP 요청(날씨)
            .get(weatherUrl)
            .then((res) => {
                setTmp(res.data.response.body.items.item[0]);
                setSky(res.data.response.body.items.item[5]);
                setPty(res.data.response.body.items.item[6]);
                setLoading(false);
            })
            .catch((e) => {
                // console.log("날씨 실패");
                // console.log(weatherUrl);
            });

        axios //HTTP 요청(미세먼지)
            .get(dustUrl)
            .then((res) => {
                setDust(res.data.response.body.items[0]);
                setLoading(false);
            })
            .catch((e) => {
                // console.log("미세먼지 실패");
                // console.log(dustUrl);
            });
    }, [baseTime, si]);

    const getData = (props) => {
        //클릭한 행정구 정보 저장. 이후 URL로 전달해 해당하는 행정구의 정보 보여줌.
        setX(props.x);
        setY(props.y);
        setSi(props.name);
    };

    return (
        <div className="all">
            <section className="container">
                <Seoul setCoordData={getData} />
                {loading ? (
                    <h2 className="loader value tail_big">
                        행정구를 선택해주세요 !
                    </h2>
                ) : (
                    <>
                        <div className="tblt_margin">
                            <h2>
                                {time.slice(0, 2)}시 지금 {si}의 하늘 !
                            </h2>
                            <div className="wt_wrap">
                                <Tmp fcstValue={tmp.fcstValue} />
                                <Sky fcstValue={sky.fcstValue} />
                                <br />
                                <Pty fcstValue={pty.fcstValue} />
                            </div>
                            <div className="dust_wrap">
                                <Dust
                                    date={dust.dataTime}
                                    pm10val={dust.pm10Value}
                                    pm10gr={dust.pm10Grade}
                                    pm25val={dust.pm25Value}
                                    pm25gr={dust.pm25Grade}
                                    o3val={dust.o3Value}
                                    o3gr={dust.o3Grade}
                                    coval={dust.coValue}
                                    cogr={dust.coGrade}
                                    no2val={dust.no2Value}
                                    no2gr={dust.no2Grade}
                                />
                            </div>
                        </div>
                        <License />
                    </>
                )}
            </section>
        </div>
    );
};

export default Air;
