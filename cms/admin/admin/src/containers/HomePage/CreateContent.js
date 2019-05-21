/**
 *
 * CreateContent
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

function CreateContent() {
  return (
    <FormattedMessage id="app.components.HomePage.createBlock.content">
      {message => (
        <p>
          {message}
        </p>
      )}
    </FormattedMessage>
  );
}

export default CreateContent;
