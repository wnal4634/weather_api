import React from "react";
import img1 from "img/1.jpg";
import img2 from "img/2.jpg";

const License = () => {
    return (
        <div className="license">
            <div>
                <img
                    src={img1}
                    className="lic_img"
                    alt="공공누리 1유형 저작권 이미지"
                />
                <img
                    src={img2}
                    className="lic_img"
                    alt="공공누리 3유형 저작권 이미지"
                />
            </div>
            <div>
                단기예보 출처: 기상청, 대기오염정보 출처: 환경부/한국환경공단
                에어코리아
                <br />
                기상청이 보유한 본 저작물(단기예보)은 "공공누리 1유형(출처표시)"
                조건에 따라 이용할 수 있습니다.
                <br />
                환경부/한국환경공단이 보유한 본 저작물(대기오염정보)은 "공공누리
                3유형(출처표시-변경금지)" 조건에 따라 이용할 수 있습니다.
                <br />
                대기오염정보는 인증을 받지 않은 실시간 자료이므로 자료 오류 및
                표출 값이 다를 수 있습니다.
            </div>
        </div>
    );
};

export default License;
