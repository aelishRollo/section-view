import React, { useState } from 'react';
import { Container, Header, Menu, Dropdown, Grid, Comment, Form, Button, List, Icon, Modal } from 'semantic-ui-react';
import ProjectView from './ProjectView';

const SectionView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Container>
      {/* Hamburger Menu */}
      <Button icon onClick={handleOpen}>
        <Icon name='bars' />
      </Button>

      {/* Modal for ProjectView */}
      <Modal open={modalOpen} onClose={handleClose} closeIcon>
        <Modal.Header>Select a Project</Modal.Header>
        <Modal.Content>
          <ProjectView />
        </Modal.Content>
      </Modal>

      {/* Main Content */}
      <Container>
        {/* Menu */}
        <Menu>
          <Menu.Item>
            <Header as='h2'>My section</Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item icon='ellipsis vertical' simple>
              <Dropdown.Menu>
                <Dropdown.Item>Edit title</Dropdown.Item>
                <Dropdown.Item>Edit Progression</Dropdown.Item>
                <Dropdown.Item>Duplicate</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        {/* Chord Progression */}
        <Header as='h3'>Progression: C Dm Em F</Header>

        {/* Grid Layout */}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Icon name='file audio' />
                  <List.Content>
                    <List.Header>Bass.mp3</List.Header>
                    <List.Description>2 comments</List.Description>
                  </List.Content>
                </List.Item>
                {/* Add more files as needed */}
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Icon name='file audio' />
                  <List.Content>
                    <List.Header>Guitar.mp3</List.Header>
                    <List.Description>23 comments</List.Description>
                  </List.Content>
                </List.Item>
                {/* Add more files as needed */}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* Comments Section */}
        <Header as='h3'>Comments for section</Header>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Dave</Comment.Author>
              <Comment.Text>Great section!</Comment.Text>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matthews</Comment.Author>
              <Comment.Text>Great section!</Comment.Text>
            </Comment.Content>
          </Comment>
          {/* Add more comments as needed */}
        </Comment.Group>

        {/* Comment Form */}
        <Form reply>
          <Form.TextArea />
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </Container>
    </Container>
  );
};

export default SectionView;
