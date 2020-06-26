import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default function MainOptions(props) {
    return (
        <Fragment>
            <FormControl
                placeholder="Checklist ID"
                aria-label="Checklist ID"
                aria-describedby="basic-addon1"
            />
            <Button variant="primary">
                View
            </Button>
            <Button variant="success">
                Create New
            </Button>
        </Fragment>
    );
}