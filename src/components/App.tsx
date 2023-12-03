import Form from "./Form/Form";
import Input from "./Input/Input";
import "../styles/App.css";
import PictureGitHub from "../assets/github.png";
import CameraPicture from "../assets/camera.png";
import { useState } from "react";
import Heading from "./Heading/Heading";
import DateAbout from "./DateAbout/DateAbout";
import Span from "./Span/Span";
import { CVForm, PictureTypes } from "./types";
import UploadButton from "../UploadButton/UploadButton";
import DateUniversity from "./DateUniversity/DateUniversity";

export default function App() {
  const [dateInput, setDateInput] = useState<CVForm>({
    picture: null,
    fullname: "",
    speciality: "",
    phone: "",
    email: "",
    aboutMe: "",
    school: "",
    university: "",
    dateReceipt: "",
    endDate: "",
    workExperience: "",
  });

  const [showUploadPicture, setUploadPicture] = useState<PictureTypes>({
    uploadPictureDisplay: "none",
    viewPictureDisplay: "none",
    url: "",
  });

  const [showPictCamera, setPictCamera] = useState("block");

  function loadPicture(input: HTMLInputElement): string {
    let dateIMG!: File;

    try {
      dateIMG = (input.files as FileList)[0];
    } catch (e) {
      console.log(e);
    }

    return URL.createObjectURL(dateIMG);
  }

  function changeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setDateInput({ ...dateInput, [event.target.name]: event.target.value });

    if (
      event.target === document.querySelectorAll(".t_area")[0] ||
      event.target === document.querySelectorAll(".t_area")[1]
    ) {
      if (event.target.scrollHeight > event.target.clientHeight) {
        event.target.style.overflow = "hidden";
        event.target.style.height = event.target.scrollHeight + "px";
      }
    }

    if (event.target === document.querySelector("input[type=file]")) {
      const urlImage: string = loadPicture(event.target as HTMLInputElement);

      setPictCamera("none");
      setUploadPicture({
        ...showUploadPicture,
        uploadPictureDisplay: "block",
        viewPictureDisplay: "block",
        url: urlImage,
      });
    }

    addHeading(event.target as HTMLInputElement | HTMLTextAreaElement);
  }

  function addHeading(target: HTMLInputElement | HTMLTextAreaElement): void {
    if (document.querySelector(".aboutMe") === target && target.value === "") {
      (
        document.querySelector(".headingBlockResume") as HTMLHeadingElement
      ).style.display = "none";
    } else if (
      document.querySelector(".workExperience") === target &&
      target.value === ""
    ) {
      (
        document.querySelector(".headingBlockExperience") as HTMLHeadingElement
      ).style.display = "none";
    } else if (target.closest(".block_2") && isInputValue()) {
      (
        document.querySelector(".headingBlockEducation") as HTMLHeadingElement
      ).style.display = "none";
    } else if (
      document.querySelector(".aboutMe") === target &&
      target.value !== ""
    ) {
      (
        document.querySelector(".headingBlockResume") as HTMLHeadingElement
      ).style.display = "block";
    } else if (
      document.querySelector(".workExperience") === target &&
      target.value !== ""
    ) {
      (
        document.querySelector(".headingBlockExperience") as HTMLHeadingElement
      ).style.display = "block";
    } else if (target.closest(".block_2") && target.value !== "") {
      (
        document.querySelector(".headingBlockEducation") as HTMLHeadingElement
      ).style.display = "block";
    }

    function isInputValue(): Boolean {
      let flag: Boolean = true;

      document
        .querySelector(".block_2")
        ?.querySelectorAll("input")
        .forEach((item) => {
          if (item.value !== "") {
            flag = false;
          }
        });

      return flag;
    }
  }

  return (
    <div className="appRoot">
      <main>
        <div className="controlPanel">
          <div className="aboutMeBlock">
            <Form action="#" className="block block_1">
              <UploadButton className="uploadButton">
                <Input
                  type="file"
                  key="picture"
                  accept="image/*"
                  myKey="picture"
                  onChange={changeInput}
                />
                <img
                  src={CameraPicture}
                  alt="camera"
                  className="pictCamera"
                  style={{ display: showPictCamera }}
                />
                <img
                  className="uploadPicture"
                  style={{ display: showUploadPicture.uploadPictureDisplay }}
                  src={showUploadPicture.url}
                ></img>
              </UploadButton>

              <div className="wrapper_inputs">
                <h2 className="headingBlock heading_aboutMe">About me</h2>

                <Input
                  name="fullname"
                  type="text"
                  key="fullname"
                  myKey="fullname"
                  placeholder="Fullname"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="speciality"
                  type="text"
                  key="speciality"
                  myKey="speciality"
                  placeholder="Speciality"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  key="phone"
                  myKey="phone"
                  placeholder="Phone Number"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="email"
                  type="mail"
                  key="email"
                  myKey="email"
                  placeholder="Email"
                  onChange={changeInput}
                  required
                />

                <textarea
                  name="aboutMe"
                  className="t_area aboutMe"
                  key={"aboutMe"}
                  onChange={changeInput}
                  placeholder="About Me"
                ></textarea>
              </div>
            </Form>
          </div>

          <div className="educationBlock">
            <Form action="#" className="block block_2">
              <div className="wrapper_inputs">
                <h2 className="headingBlock heading_education">Education</h2>

                <Input
                  name="school"
                  type="text"
                  key="school"
                  myKey="school"
                  placeholder="School"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="university"
                  type="text"
                  key="university"
                  myKey="university"
                  placeholder="University"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="dateReceipt"
                  type="date"
                  key="dateReceipt"
                  myKey="dateReceipt"
                  placeholder="Date of receipt"
                  onChange={changeInput}
                  required
                />
                <Input
                  name="endDate"
                  type="date"
                  key="endDate"
                  myKey="endDate"
                  placeholder="End date"
                  onChange={changeInput}
                  required
                />
              </div>
            </Form>
          </div>

          <div className="workExperienceBlock">
            <Form action="#" className="block block_3">
              <div className="wrapper_inputs">
                <h2 className="headingBlock heading_experience">
                  Work experience
                </h2>

                <textarea
                  name="workExperience"
                  className=" t_area workExperience"
                  key={"aboutMe"}
                  placeholder="Work experience"
                  onChange={changeInput}
                ></textarea>
              </div>
            </Form>
          </div>
        </div>

        <div className="summaryResume">
          <div className="sheet">
            <div className="wrapper">
              <div className="resume_header">
                <div className="wrapperPicture">
                  <img
                    className="viewPicture"
                    style={{ display: showUploadPicture.viewPictureDisplay }}
                    src={showUploadPicture.url}
                  />
                </div>
                <DateAbout className="block_about_me">
                  <Span className="info_fullname">{dateInput.fullname}</Span>
                  <Span className="info_speciality">
                    {dateInput.speciality}
                  </Span>

                  <div className="dateContactMe">
                    <Span className="info_fullname">{dateInput.phone}</Span>
                    <Span className="info_speciality">{dateInput.email}</Span>
                  </div>
                </DateAbout>
              </div>

              <div className="resume_summary">
                <Heading className="headingBlockSummary" dataName="Summary" />
                <p className="info_summary">{dateInput.aboutMe}</p>
              </div>

              <div className="resume_education">
                <Heading
                  className="headingBlockEducation"
                  dataName="Education"
                />
                <span className="info_schoolName">{dateInput.school}</span>

                <DateUniversity className="dateUniversity">
                  <Span className="info_universityName">
                    {dateInput.university}
                  </Span>
                  <Span className="info_dateReceipt">
                    {dateInput.dateReceipt}
                  </Span>
                  <Span className="info_endDate">{dateInput.endDate}</Span>
                </DateUniversity>

                <div className="resume_WorkExperience">
                  <Heading
                    className="headingBlockExperience"
                    dataName="WorkExperience"
                  />
                  <p className="info_workExperience">
                    {dateInput.workExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a href="https:/github.com/dg44k/" className="link_footer">
          <span>&#169;Copyright dg44k</span>
          <img src={PictureGitHub} alt="github icon" className="img_footer" />
        </a>
      </footer>
    </div>
  );
}
