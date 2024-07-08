import React, { useState } from 'react';
import { Container, List, Icon } from 'semantic-ui-react';

interface Project {
  id: string;
  name: string;
  sections?: Section[];
}

interface Section {
  id: string;
  name: string;
  files?: File[];
}

interface File {
  id: string;
  name: string;
  comments?: number;
}

const ProjectView: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  return (
    <Container>
      {/* Project List */}
      <List selection>
        <List.Item onClick={() => handleProjectClick({ id: '1', name: 'Project 1' })}>
          <List.Icon name='folder' />
          <List.Content>
            <List.Header>Project 1</List.Header>
          </List.Content>
        </List.Item>
        <List.Item onClick={() => handleProjectClick({ 
          id: '2', name: 'Project 2', 
          sections: [
            { id: '1', name: 'Section 1', files: [{ id: '1', name: 'Bass.mp3', comments: 2 }] }, 
            { id: '2', name: 'Section 2' }
          ] 
        })}>
          <List.Icon name='folder' />
          <List.Content>
            <List.Header>Project 2</List.Header>
            <List.List>
              <List.Item>
                <List.Icon name='folder open' />
                <List.Content>
                  <List.Header>Section 1</List.Header>
                  <List.Description>Bass.mp3</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='folder open' />
                <List.Content>
                  <List.Header>Section 2</List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
        {/* Add more projects as needed */}
      </List>
    </Container>
  );
};

export default ProjectView;
