import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import isEmail from 'validator/lib/isEmail';
import { useForm } from "../hooks/useForm.hook";

export const UserForm: React.FC = () => {

  const { handleSubmit, handleChange, data: user, errors } = useForm<UserData>({
    validations: {
      firstName: {
        pattern: {
          value: '^[A-Za-z]*$',
          message:
            "You're not allowed to use special characters or numbers in your name.",
        },
      },
      lastName: {
        pattern: {
          value: '^[A-Za-z]*$',
          message:
            "You're not allowed to use special characters or numbers in your name.",
        },
      },
      email: {
        custom: {
          isValid: isEmail,
          message: 'You have to enter a valid email.',
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: 'You have to enter a password with at least 6 characters.',
        },
      },
      reportRole: {
        custom: {
          isValid: (value) => value === 'admin' || value === 'user',
          message: 'You have to select a role.',
        }
      },
      embedTarget: {
        custom: {
          isValid: (value) => value === '_blank' || value === '_self',
          message: 'You have to select an embed target.',
        }
      }
    },
    onSubmit: () => alert('User submitted!'),
  });

  return (
    <Form
      onSubmit={handleSubmit}
      className="form"
    >
      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className="h6">First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
            onChange={handleChange('firstName')}
            name="firstName"
            value={user.firstName}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className="h6">Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
            onChange={handleChange('lastName')}
            name="lastName"
            value={user.lastName}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className="h6">Reports Role</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Reports Role"
            aria-describedby="inputGroupPrepend"
            className="form-control"
            onChange={handleChange('reportRole')}
            name="reportRole"
            value={user.reportRole}
            isInvalid={!!errors.reportRole}
          />
          <Form.Control.Feedback type="invalid">
            {errors.reportRole}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className="h6">Email</Form.Label>
          <Form.Control 
           type="email"
           placeholder="Email"
           onChange={handleChange('email')}
           name="email"
            value={user.email}
           isInvalid={!!errors.email}
           required 
            />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label  className="h6">Embed Target</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Embed Target"
          onChange={handleChange('embedTarget')}
          name="embedTarget"
          value={user.embedTarget}
          isInvalid={!!errors.embedTarget}
          required 
          />
          <Form.Control.Feedback type="invalid">
            {errors.embedTarget}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="row d-flex justify-content-center mt-2">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label  className="h6">Password</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Password"
          onChange={handleChange('password')}
          name="password"
          value={user.password}
          isInvalid={!!errors.password}
          required 
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="row d-flex justify-content-center">
        <Form.Group as={Col} md="6" className="mt-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
          <Button type="submit" className="mt-3">
            Submit form
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};
