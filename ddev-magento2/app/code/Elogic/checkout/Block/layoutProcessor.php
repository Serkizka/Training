<?php

declare(strict_types=1);

namespace Elogic\checkout\Block;

use Magento\Checkout\Block\Checkout\AttributeMerger;
use Magento\Checkout\Block\Checkout\LayoutProcessorInterface;
use Magento\Customer\Model\AttributeMetadataDataProvider;
use Magento\Eav\Api\Data\AttributeInterface;
use Magento\Ui\Component\Form\AttributeMapper;
use Magento\Framework\Exception\LocalizedException;


class layoutProcessor implements LayoutProcessorInterface
{
    /**
     * @var AttributeMerger
     */
    private $merger;

    /**
     * @var AttributeMapper
     */
        private $attributeMapper;

        /**
         * @var AttributeMetadataDataProvider
         */
        private $attributeMetadataDataProvider;

    /**
     * @param AttributeMetadataDataProvider $attributeMetadataDataProvider
     * @param AttributeMapper $attributeMapper
     * @param AttributeMerger $attributeMerger
     */
        public function __construct(
    AttributeMetadataDataProvider $attributeMetadataDataProvider,
            AttributeMapper $attributeMapper,
            AttributeMerger $attributeMerger
        ){
            $this->attributeMetadataDataProvider = $attributeMetadataDataProvider;
            $this->attributeMapper = $attributeMapper;
            $this->merger = $attributeMerger;
        }

    /**
     * @param $jsLayout
     * @return array
     * @throws LocalizedException
     */

        public function process($jsLayout)
        {

            //load attributes from the database
            $elements = $this->getAddressAttributes();

            //get fields configuration of our step
            $fields = &$jsLayout['components']['checkout']['children']['steps']['children']['contact-step']
                ['children']['contact']['children']['contact-fieldset']['children'];

            $fieldsCodes = array_keys($fields);
            $elements = array_filter($elements, function ($key) use ($fieldsCodes) {
                return in_array($key, $fieldsCodes);
            }, ARRAY_FILTER_USE_KEY);


            //merge attribute config and fields config
            $fields = $this->merger->merge(
                $elements,
                'checkoutProvider',
                'contact',
                $fields
            );

            return $jsLayout;
        }

    /**
     * @return array
     * @throws LocalizedException
     */

        private function getAddressAttributes(): array
        {
            /** @var  AttributeInterface[] $attributes */
            $attributes = $this->attributeMetadataDataProvider->loadAttributesCollection(
                'customer_address',
                'customer_register_address'
            );
            $elements = [];
            foreach ($attributes as $attribute) {
                $code = $attribute->getAttributeCode();
                $elements[$code] = $this->attributeMapper->map($attribute);
                if (isset($elements[$code]['label'])) {
                    $label = $elements[$code]['label'];
                    $elements[$code]['label'] = __($label);
                }
            }
            return $elements;
        }
}
