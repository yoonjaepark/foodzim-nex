import React from "react";
import {Layout, Select} from 'antd';

const {Option} = Select;
const {Footer} = Layout;

export const AppFooter = () => {
    return (
        <Footer style={{position: 'relative'}}>
            <div className="our-story-card card-contents footer-card our-story-card-no-border"
                 data-uia-our-story="footer" data-uia="our-story-card">
                <div className="site-footer-wrapper centered dark">
                    <div className="footer-divider"></div>
                    <div className="site-footer"><p className="footer-top">질문이 있으신가요? 문의 전화:&nbsp;<a
                        className="footer-top-a" href="tel:00-308-321-0058">00-308-321-0058</a></p>
                        <ul className="footer-links structural">
                            <li className="footer-link-item" placeholder="footer_responsive_link_faq_item"><a
                                className="footer-link" data-uia="footer-link"
                                href="https://help.netflix.com/support/412"
                                placeholder="footer_responsive_link_faq"><span id=""
                                                                               data-uia="data-uia-footer-label">자주 묻는 질문</span></a>
                            </li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_help_item"><a
                                className="footer-link" data-uia="footer-link" href="https://help.netflix.com"
                                placeholder="footer_responsive_link_help"><span id=""
                                                                                data-uia="data-uia-footer-label">고객 센터</span></a>
                            </li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_account_item">
                                <a className="footer-link" data-uia="footer-link" href="/youraccount"
                                   placeholder="footer_responsive_link_account"><span id=""
                                                                                      data-uia="data-uia-footer-label">계정</span></a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_media_center_item"><a
                                className="footer-link" data-uia="footer-link" href="https://media.netflix.com/"
                                placeholder="footer_responsive_link_media_center"><span id=""
                                                                                        data-uia="data-uia-footer-label">미디어 센터</span></a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_relations_item"><a className="footer-link"
                                                                                       data-uia="footer-link"
                                                                                       href="http://ir.netflix.com/"
                                                                                       placeholder="footer_responsive_link_relations"><span
                                id="" data-uia="data-uia-footer-label">투자 정보(IR)</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_jobs_item"><a
                                className="footer-link" data-uia="footer-link"
                                href="https://jobs.netflix.com/jobs"
                                placeholder="footer_responsive_link_jobs"><span id=""
                                                                                data-uia="data-uia-footer-label">입사 정보</span></a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_waysToWatch_item"><a className="footer-link"
                                                                                         data-uia="footer-link"
                                                                                         href="/watch"
                                                                                         placeholder="footer_responsive_link_waysToWatch"><span
                                id="" data-uia="data-uia-footer-label">Netflix 지원 디바이스</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a
                                className="footer-link" data-uia="footer-link"
                                href="https://help.netflix.com/legal/termsofuse"
                                placeholder="footer_responsive_link_terms"><span id=""
                                                                                 data-uia="data-uia-footer-label">이용 약관</span></a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_privacy_separate_link_item">
                                <a
                                    className="footer-link"
                                    data-uia="footer-link"
                                    href="https://help.netflix.com/legal/privacy"
                                    placeholder="footer_responsive_link_privacy_separate_link">
                                    <span id="" data-uia="data-uia-footer-label">개인정보</span>
                                </a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_cookies_separate_link_item">
                                <a
                                    className="footer-link" data-uia="footer-link"
                                    href="https://help.netflix.com/legal/privacy#cookies"
                                    placeholder="footer_responsive_link_cookies_separate_link">
                                    <span id="" data-uia="data-uia-footer-label">쿠키 설정</span>
                                </a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_corporate_information_item">
                                <a
                                    className="footer-link" data-uia="footer-link"
                                    href="https://help.netflix.com/ko/node/2101"
                                    placeholder="footer_responsive_link_corporate_information">
                                    <span id="" data-uia="data-uia-footer-label">회사 정보</span>
                                </a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_contact_us_item">
                                <a className="footer-link"
                                   data-uia="footer-link"
                                   href="https://help.netflix.com/contactus"
                                   placeholder="footer_responsive_link_contact_us">
                                    <span id="" data-uia="data-uia-footer-label">문의하기</span>
                                </a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_speed_test_item">
                                <a className="footer-link"
                                   data-uia="footer-link"
                                   href="https://fast.com"
                                   placeholder="footer_responsive_link_speed_test">
                                    <span id="" data-uia="data-uia-footer-label">속도 테스트</span>
                                </a>
                            </li>
                            <li className="footer-link-item"
                                placeholder="footer_responsive_link_legal_notices_item">
                                <a
                                    className="footer-link" data-uia="footer-link"
                                    href="https://help.netflix.com/legal/notices"
                                    placeholder="footer_responsive_link_legal_notices">
                                    <span id="" data-uia="data-uia-footer-label">법적 고지</span>
                                </a>
                            </li>
                            <li className="footer-link-item originals-link"
                                placeholder="footer_responsive_link_netflix_originals_item">
                                <a
                                    className="footer-link" data-uia="footer-link"
                                    href="https://www.netflix.com/kr/browse/genre/839338"
                                    placeholder="footer_responsive_link_netflix_originals">
                                    <span id="" data-uia="data-uia-footer-label">Netflix 오리지널</span>
                                </a>
                            </li>
                        </ul>
                        <div className="lang-selection-container" id="lang-switcher">
                            <div data-uia="language-picker+container" className="ui-select-wrapper">
                                <label
                                    htmlFor="undefined-select" className="ui-label no-display">
                                    <span className="ui-label-text"/>
                                </label>
                                <div className="select-arrow medium prefix globe">
                                    <Select defaultValue="ko">
                                        <Option value="ko">한국어</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <p className="footer-country">Netflix 대한민국</p>
                        <div className="copy-text">
                            <div className="copy-text-block">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호:
                                00-308-321-0058
                            </div>
                            <div className="copy-text-block">대표: 레지널드 숀 톰프슨</div>
                            <div className="copy-text-block">이메일 주소: korea@netflix.com</div>
                            <div className="copy-text-block">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호
                                03161
                            </div>
                            <div className="copy-text-block">클라우드 호스팅: Amazon Web Services Inc.</div>
                            <div id="" className="copy-text-block" data-uia=""><a
                                href="http://www.ftc.go.kr/www/bizCommView.do?key=232&amp;apv_perm_no=2018300016930200431&amp;pageUnit=10&amp;searchCnd=bup_nm&amp;searchKrwd=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&amp;pageIndex=1">공정거래위원회
                                웹사이트 링크</a></div>
                        </div>
                    </div>
                </div>
                <div className="center-pixel"/>
            </div>
            <style jsx>
                {`
                  .site-footer-wrapper {
                        min-width: 190px;
                        width: 100%;
                        margin-top: 80px;
                        padding-bottom: 20px;
                        font-size: 1em;
                        color: #757575;
                        position: relative;
                   }
                   ul.structural>li {
                        list-style: none;
                        margin-left: 0;
                   }
                   ul.structural {
                        padding: 0;
                        margin: 0;
                    }
                   .footer-link-item {
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        padding: 0;
                        margin-bottom: 16px;
                        display: inline-block;
                        min-width: 100px;
                        width: 25%;
                        padding-right: 12px;
                        vertical-align: top;
                    }
                `}
            </style>
        </Footer>
    )
}