<?php

namespace App\Helper;

use Symfony\Component\HttpFoundation\File\File;

class UserHelper implements AssetHelperInterface
{
    /**
     * @var FileUploadHelper
     */
    protected FileUploadHelper $fileUploadHelper;

    /**
     * @var string
     */
    protected string $uploadDirectory;

    public function __construct(string $uploadDirectory, FileUploadHelper $fileUploadHelper)
    {
        $this->uploadDirectory = $uploadDirectory;
        $this->fileUploadHelper = $fileUploadHelper;
    }


    public function getUploadDirectory(?string $destDirectory): ?string
    {
        try {
            if(!$destDirectory) return null;
            $path = $this->uploadDirectory . "/public/backend/users/" . $destDirectory . "/" ;
            if (!file_exists($path)) mkdir($path, 0777, true);
            return $path;
        } catch (\Exception $e) {
            return null;
        }

    }

    public function uploadAsset(?File $file, ?string $destDirectory): ?File
    {
        return $this->fileUploadHelper->upload($file, $this->getUploadDirectory($destDirectory));
    }


    public function removeAsset(?File $file): ?string
    {
        return $this->fileUploadHelper->remove($file);
    }

}
