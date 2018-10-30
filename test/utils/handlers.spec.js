/*
 * knots
 * Copyright 2018 data.world, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the
 * License.
 *
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 * This product includes software developed at
 * data.world, Inc.(http://data.world/).
 */

import { getSpecImplementationValue } from '../../app/utils/handlers';
import { sampleSpecImplementation } from '../samples';

describe('Schema functions', () => {
  describe('get Spec Implementation Value', () => {
    it('should return a defined value', () => {
      const expectedSelected = true;
      const actualSelected = getSpecImplementationValue(
        sampleSpecImplementation,
        'usesMetadata.selected'
      );

      const expectedReplicationKey = false;
      const actualReplicationKey = getSpecImplementationValue(
        sampleSpecImplementation,
        'usesMetadata.replication_key'
      );

      const expectedReplicationMethod = 0;
      const actualReplicationMethod = getSpecImplementationValue(
        sampleSpecImplementation,
        'usesMetadata.replication_method'
      );

      const expectedCatalogArg = false;
      const actualCatalogArg = getSpecImplementationValue(
        sampleSpecImplementation,
        'usesCatalogArg'
      );

      const expectedStateType = 'stream';
      const actualStateType = getSpecImplementationValue(
        sampleSpecImplementation,
        'mustSeedState.stateType'
      );

      expect(actualSelected).toEqual(expectedSelected);
      expect(actualReplicationKey).toEqual(expectedReplicationKey);
      expect(actualReplicationMethod).toEqual(expectedReplicationMethod);
      expect(actualCatalogArg).toEqual(expectedCatalogArg);
      expect(actualStateType).toEqual(expectedStateType);
    });

    it('should return a undefined for undefined fields', () => {
      const expectedUndefinedRootValue = undefined;
      const actualUndefinedRootValue = getSpecImplementationValue(
        sampleSpecImplementation,
        'foo'
      );

      const expectedUndefinedNestedValue = undefined;
      const actualUndefinedNestedValue = getSpecImplementationValue(
        sampleSpecImplementation,
        'foo.bar'
      );

      expect(actualUndefinedRootValue).toEqual(expectedUndefinedRootValue);
      expect(actualUndefinedNestedValue).toEqual(expectedUndefinedNestedValue);
    });
  });
});
