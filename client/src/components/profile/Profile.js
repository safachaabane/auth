import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { logout } from "../../js/actions";
import { Link } from "react-router-dom";


const Profile = () => {
  const { isLoading, user } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : !user ? (
        <Redirect to="/login" />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              {user.firstName}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.lastName}
            </Card.Subtitle>
            <Card.Text>{user.Email}</Card.Text>
            <Link to="/login">
              <Button
                onClick={() => dispatch(logout())}
              >
                LogOut
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Profile;
