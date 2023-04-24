import React, { useState } from "react";
import { Card, CardBody, Button, Container } from "reactstrap";
import Stack from "react-bootstrap/Stack";

const SingleVideo = () => {
  const [studentComment, setStudentComment] = useState("");
  const [posterComment, setPosterComment] = useState("");
  const [studentComments, setStudentComments] = useState([]);
  const [posterComments, setPosterComments] = useState([]);

  const handleStudentCommentSubmit = (e) => {
    e.preventDefault();
    setStudentComments([...studentComments, studentComment]);
    setStudentComment("");
  };

  const handlePosterCommentSubmit = (e) => {
    e.preventDefault();
    setPosterComments([...posterComments, posterComment]);
    setPosterComment("");
  };
  return (
    <Container>
      <Stack direction="horizontal" gap={3} className="m-5">
        <Stack className="col-md-8">
          <Card>
            <CardBody>
              <video width="100%" controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h5 className="card-title mt-3">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <h5 className="card-title">Student Comments</h5>
              {studentComments.length > 0 ? (
                studentComments.map((comment, index) => (
                  <div key={index} className="mb-2">
                    <p>{comment}</p>
                    <small className="text-muted">Posted by: Student</small>
                    <hr />
                    <span style={{ cursor: "pointer", color: "#0d6efd" }}>
                      Reply
                    </span>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
              <form onSubmit={handleStudentCommentSubmit}>
                <div className="mb-3">
                  <label htmlFor="student-comment" className="form-label">
                    Leave a comment as student
                  </label>
                  <textarea
                    className="form-control"
                    id="student-comment"
                    rows="3"
                    value={studentComment}
                    onChange={(e) => setStudentComment(e.target.value)}
                  ></textarea>
                </div>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </form>
            </CardBody>
          </Card>
        </Stack>
        <Stack className="col-md-3">
          <Card>
            <CardBody>
              <h4 style={{ marginBottom: "1rem" }}>More Videos</h4>
              <Stack
                direction="horizontal"
                gap={2}
                className="my-4"
                style={{ cursor: "pointer" }}
              >
                <video width="50%" controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <span className="card-text">
                  Some quick example text to build{" "}
                </span>
              </Stack>
              <hr />
              <Stack
                direction="horizontal"
                gap={2}
                className="my-4"
                style={{ cursor: "pointer" }}
              >
                <video width="50%" controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <span className="card-text">
                  Some quick example text to build{" "}
                </span>
              </Stack>
              <hr />
              <Stack
                direction="horizontal"
                gap={2}
                className="my-4"
                style={{ cursor: "pointer" }}
              >
                <video width="50%" controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <span className="card-text">
                  Some quick example text to build{" "}
                </span>
              </Stack>
              <hr />
              <Stack
                direction="horizontal"
                gap={2}
                className="my-4"
                style={{ cursor: "pointer" }}
              >
                <video width="50%" controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <span className="card-text">
                  Some quick example text to build{" "}
                </span>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SingleVideo;
