import './styles.css';
import {team1Img, team2Img, team3Img} from "../../assets";

const AboutSection = () => {

    return (
        <>
            <div className="more-info about-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-12 align-self-center">
                                        <div className="right-content">
                                            <span>Kim jesteśmy</span>
                                            <h2>Pare słów o <em>naszej firmie</em></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.</p>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                                roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                                the cites of the word in classical literature, discovered the
                                                undoubtable source.
                                            </p>
                                            <p>It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop
                                                publishing software like Aldus PageMaker including versions of Lorem
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <span>Nasz zespół</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src={team1Img} alt=""/>
                                    <div className="down-content">
                                        <h4>John Doe</h4>
                                        <span>Co-Founder</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src={team2Img} alt=""/>
                                    <div className="down-content">
                                        <h4>Sara Tancredi</h4>
                                        <span>Chief Marketing Officer</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src={team3Img} alt=""/>
                                    <div className="down-content">
                                        <h4>John Smith</h4>
                                        <span>Financial Analyst</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSection;
