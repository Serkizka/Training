<?php
namespace Elogic\customTab\Controller\Index;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\Controller\Result\JsonFactory;
use Magento\Framework\View\Result\PageFactory;

class View extends Action
{
    protected $_resultPageFactory;
    protected $_resultJsonFactory;

    public function __construct(Context $context, PageFactory $resultPageFactory, JsonFactory $resultJsonFactory)
    {
        $this->_resultPageFactory = $resultPageFactory;
        $this->_resultJsonFactory = $resultJsonFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        $result = $this->_resultJsonFactory->create();
        $resultPage = $this->_resultPageFactory->create();
        $currentProductId = $this->getRequest()->getParam('currentproduct');

        $data = array('currentproductid'=>$currentProductId);

        $block = $resultPage->getLayout()
            ->createBlock('Magemonkeys\Custom\Block\Index\View')
            ->setTemplate('Magemonkeys_Custom::view.phtml')
            ->setData('data',$data)
            ->toHtml();

        $result->setData(['output' => $block]);
        return $result;
    }
}
