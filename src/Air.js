import React, { useEffect, useState } from "react";
import Dust from "Dust";
import { Tmp, Sky, Pty } from "Weather";
import axios from "axios";
import moment from "moment/moment";
import Seoul from "Seoul";

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

        axios
            .get(weatherUrl)
            .then((res) => {
                setTmp(res.data.response.body.items.item[0]);
                setSky(res.data.response.body.items.item[5]);
                setPty(res.data.response.body.items.item[6]);
                setLoading(false);
            })
            .catch((e) => {
                //날씨실패문제있음(좌표주고부터 생김)
                console.log("날씨 실패");
                console.log(weatherUrl);
            });

        axios
            .get(dustUrl)
            .then((res) => {
                setDust(res.data.response.body.items[0]);
                setLoading(false);
            })
            .catch((e) => {
                console.log("미세먼지 실패");
                console.log(dustUrl);
            });
    }, [baseTime, si]);

    const getData = (props) => {
        setX(props.x);
        setY(props.y);
        setSi(props.name);
    };

    return (
        <>
            <Seoul setCoordData={getData} />
            <section className="container">
                {loading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="hosp">
                        <div className="dustInfo">
                            <Dust
                                date={dust.dataTime}
                                pm10val={dust.pm10Value}
                                pm10gr={dust.pm10Grade}
                                o3val={dust.o3Value}
                                o3gr={dust.o3Grade}
                                coval={dust.coValue}
                                cogr={dust.coGrade}
                                no2val={dust.no2Value}
                                no2gr={dust.no2Grade}
                            />
                        </div>
                        <div className="hosp_info">
                            {/* {weather.map((wea) => ( */}
                            <Tmp
                                fcstDate={tmp.fcstDate}
                                fcstTime={tmp.fcstTime}
                                category={tmp.category}
                                fcstValue={tmp.fcstValue}
                            />
                            <Sky
                                category={sky.category}
                                fcstValue={sky.fcstValue}
                            />
                            <Pty
                                category={pty.category}
                                fcstValue={pty.fcstValue}
                            />
                            {/* ))} */}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Air;
