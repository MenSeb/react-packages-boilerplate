import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as UI from '@packages/react-ui';
import { ImageSVG } from '../components';

export function Construction() {
  const navigate = useNavigate();

  const navigateBack = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      navigate(-1);
    },
    [navigate],
  );

  return (
    <UI.Region className="region-construction" label="construction">
      <UI.Container>
        <UI.Heading level={2}>Page under construction!</UI.Heading>
        <UI.Text>
          You may use the button to get back to the home page, the button to
          navigate back to where you came from or feel free to navigate anywhere
          else using the navigation menu.
        </UI.Text>
        <UI.Container className="ctas">
          <UI.CallToAction emphasize to="/">
            home page
          </UI.CallToAction>
          <UI.CallToAction onClick={navigateBack} to="..">
            previous page
          </UI.CallToAction>
        </UI.Container>
      </UI.Container>
      <ImageSVG label="developper working" name="ImageCoding" />
    </UI.Region>
  );
}
